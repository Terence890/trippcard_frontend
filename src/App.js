import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FlightSearch from './pages/FlightSearch';
import HotelSearch from './pages/HotelSearch';
import Bookings from './pages/Bookings';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen gradient-bg">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flights" element={<FlightSearch />} />
            <Route path="/hotels" element={<HotelSearch />} />
            <Route path="/bookings" element={<Bookings />} />
          </Routes>
        </main>
        <Footer />
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#123B68',
              color: '#FFFFFF',
              border: '1px solid #F4B400',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App; 