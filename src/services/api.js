import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

// Flight API functions
export const flightAPI = {
  search: (params) => api.get('/flight/search', { params }),
  book: (data) => api.post('/flight/bookings', data),
  getBookings: () => api.get('/flight/bookings'),
};

// Hotel API functions
export const hotelAPI = {
  search: (params) => api.get('/hotel/search', { params }),
  book: (data) => api.post('/hotel/bookings', data),
  getBookings: () => api.get('/hotel/bookings'),
};

// General booking functions
export const bookingAPI = {
  getAllBookings: () => api.get('/bookings'),
  bookFlight: (data) => api.post('/book/flight', data),
  bookHotel: (data) => api.post('/book/hotel', data),
};

export default api; 