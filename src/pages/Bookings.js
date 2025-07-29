import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { Plane, Hotel, Calendar, MapPin, Clock, DollarSign } from 'lucide-react';
import axios from 'axios';

const Bookings = () => {
  const [bookings, setBookings] = useState({ flights: [], hotels: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('flights');

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('/api/bookings');
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      toast.error('Failed to load bookings');
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-text-secondary">Loading your bookings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            MY BOOKINGS
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Manage your flight and hotel reservations
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-1">
            <button
              onClick={() => setActiveTab('flights')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'flights'
                  ? 'bg-accent text-white'
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              <Plane className="w-4 h-4 inline mr-2" />
              Flights ({bookings.flights?.length || 0})
            </button>
            <button
              onClick={() => setActiveTab('hotels')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'hotels'
                  ? 'bg-accent text-white'
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              <Hotel className="w-4 h-4 inline mr-2" />
              Hotels ({bookings.hotels?.length || 0})
            </button>
          </div>
        </motion.div>

        {/* Bookings Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {activeTab === 'flights' ? (
            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-6">
                FLIGHT BOOKINGS
              </h2>
              {bookings.flights?.length > 0 ? (
                <div className="space-y-6">
                  {bookings.flights.map((flight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="card"
                    >
                      <div className="flex flex-col lg:flex-row justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-4">
                            <Plane className="w-8 h-8 text-accent" />
                            <div>
                              <h3 className="font-heading font-bold text-white text-lg">
                                {flight.origin} → {flight.destination}
                              </h3>
                              <p className="text-text-secondary">{flight.airline}</p>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4 text-accent" />
                              <span className="text-text-secondary">
                                {formatDate(flight.departureDate)}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-accent" />
                              <span className="text-text-secondary">
                                {formatTime(flight.departureDate)}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end space-y-2 mt-4 lg:mt-0">
                          <div className="text-accent font-bold text-2xl">
                            ${flight.price}
                          </div>
                          <div className="text-text-secondary text-sm">
                            Booking ID: {flight.flightId}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Plane className="w-16 h-16 text-text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    No Flight Bookings
                  </h3>
                  <p className="text-text-secondary">
                    You haven't booked any flights yet. Start exploring!
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-6">
                HOTEL BOOKINGS
              </h2>
              {bookings.hotels?.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {bookings.hotels.map((hotel, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="card"
                    >
                      <div className="h-48 bg-gradient-to-br from-primary-light to-primary-dark rounded-lg mb-4 flex items-center justify-center">
                        <Hotel className="w-16 h-16 text-white/50" />
                      </div>
                      
                      <div>
                        <h3 className="font-heading font-bold text-white text-lg mb-2">
                          {hotel.hotelName}
                        </h3>
                        <div className="flex items-center space-x-2 mb-3">
                          <MapPin className="w-4 h-4 text-accent" />
                          <span className="text-text-secondary">{hotel.location}</span>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center justify-between">
                            <span className="text-text-secondary">Check-in:</span>
                            <span className="text-white">{formatDate(hotel.checkInDate)}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-text-secondary">Check-out:</span>
                            <span className="text-white">{formatDate(hotel.checkOutDate)}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-accent font-bold text-xl">
                            ${hotel.price}
                          </div>
                          <div className="text-text-secondary text-sm">
                            ID: {hotel.hotelId}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Hotel className="w-16 h-16 text-text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    No Hotel Bookings
                  </h3>
                  <p className="text-text-secondary">
                    You haven't booked any hotels yet. Start exploring!
                  </p>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Bookings; 