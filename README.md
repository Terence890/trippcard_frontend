# Trippcard Frontend

A modern, responsive travel booking platform built with React and Tailwind CSS.

## 🎨 Design System

### Color Palette
- **Primary Background**: Navy Blue (#123B68, #1B3A57)
- **Accent Color**: Golden Yellow (#F4B400)
- **Text Primary**: White (#FFFFFF)
- **Text Secondary**: Light Gray (#D0D0D0)
- **CTA Buttons**: Golden Yellow with White Text
- **Hover Effects**: Sky Blue (#4AB3F4) or Light Yellow (#FFE082)

### Typography
- **Headings**: Poppins/Montserrat (Bold, All-Caps)
- **Body Text**: Open Sans/Roboto (Regular, Clear)
- **Taglines**: Raleway/Lato (Light Italic)

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Flight Search**: Real-time flight search with Amadeus API integration
- **Hotel Booking**: Comprehensive hotel search and booking system
- **Booking Management**: View and manage all your reservations
- **Responsive Design**: Works perfectly on all devices
- **Smooth Animations**: Framer Motion powered transitions
- **Toast Notifications**: User-friendly feedback system

## 🛠️ Tech Stack

- **React 18**: Latest React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Router**: Client-side routing
- **Axios**: HTTP client for API calls
- **React Hook Form**: Form handling
- **Lucide React**: Modern icon library
- **React Hot Toast**: Toast notifications

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd trippcard-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

### Backend Integration
The frontend is configured to work with the Trippcard backend API. Make sure your backend is running on `http://localhost:5000`.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.js       # Navigation component
│   └── Footer.js       # Footer component
├── pages/              # Page components
│   ├── Home.js         # Landing page
│   ├── FlightSearch.js # Flight search page
│   ├── HotelSearch.js  # Hotel search page
│   └── Bookings.js     # Bookings management page
├── services/           # API services
│   └── api.js          # API configuration and functions
├── App.js              # Main app component
├── index.js            # React entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎯 Key Components

### Navigation
- Responsive navbar with mobile menu
- Active route highlighting
- Smooth transitions

### Search Forms
- Flight search with origin, destination, date, and passengers
- Hotel search with location, dates, and guests
- Form validation with React Hook Form
- Real-time API integration

### Booking Management
- View all flight and hotel bookings
- Tabbed interface for different booking types
- Responsive card layouts
- Loading states and error handling

## 🎨 Styling

The project uses Tailwind CSS with custom configuration:

- **Custom Colors**: Matches the design system
- **Custom Fonts**: Google Fonts integration
- **Custom Components**: Reusable component classes
- **Responsive Design**: Mobile-first approach

## 🔌 API Integration

The frontend communicates with the backend through:

- **Flight Search**: `/api/flight-search`
- **Hotel Search**: `/api/hotel-search`
- **Flight Booking**: `/api/flight-bookings`
- **Hotel Booking**: `/api/hotel-bookings`
- **General Bookings**: `/api/bookings`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, please open an issue in the GitHub repository or contact the development team. 