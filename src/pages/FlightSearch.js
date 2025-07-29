import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Plane, Calendar, Users, Search, MapPin } from 'lucide-react';
import axios from 'axios';

const FlightSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/flights/search', {
        params: {
          origin: data.origin,
          destination: data.destination,
          date: data.date,
          adults: data.adults
        }
      });
      
      console.log('Flight search response:', response.data);
      console.log('Response data type:', typeof response.data);
      console.log('Is array?', Array.isArray(response.data));
      console.log('Data keys:', Object.keys(response.data));
      
      // Handle different possible data structures
      let flightsData = response.data;
      if (response.data.data) {
        flightsData = response.data.data;
      } else if (response.data.flights) {
        flightsData = response.data.flights;
      } else if (Array.isArray(response.data)) {
        flightsData = response.data;
      }
      
      console.log('Processed flights data:', flightsData);
      setSearchResults(flightsData);
      toast.success('Flights found successfully!');
    } catch (error) {
      console.error('Flight search error:', error);
      toast.error(error.response?.data?.error || 'Failed to search flights');
    } finally {
      setIsLoading(false);
    }
  };

  const popularDestinations = [
    { code: 'NYC', name: 'New York', country: 'USA' },
    { code: 'LON', name: 'London', country: 'UK' },
    { code: 'PAR', name: 'Paris', country: 'France' },
    { code: 'TOK', name: 'Tokyo', country: 'Japan' },
    { code: 'SYD', name: 'Sydney', country: 'Australia' },
    { code: 'SIN', name: 'Singapore', country: 'Singapore' }
  ];

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
            SEARCH FLIGHTS
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Find the best flight deals to your dream destination
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card max-w-4xl mx-auto mb-12"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Origin */}
              <div>
                <label className="block text-white font-medium mb-2">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Origin
                </label>
                <input
                  {...register('origin', { required: 'Origin is required' })}
                  className="input-field"
                  placeholder="Airport code (e.g., JFK)"
                />
                {errors.origin && (
                  <p className="text-red-400 text-sm mt-1">{errors.origin.message}</p>
                )}
              </div>

              {/* Destination */}
              <div>
                <label className="block text-white font-medium mb-2">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Destination
                </label>
                <input
                  {...register('destination', { required: 'Destination is required' })}
                  className="input-field"
                  placeholder="Airport code (e.g., LAX)"
                />
                {errors.destination && (
                  <p className="text-red-400 text-sm mt-1">{errors.destination.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Date */}
              <div>
                <label className="block text-white font-medium mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Departure Date
                </label>
                <input
                  {...register('date', { required: 'Date is required' })}
                  type="date"
                  className="input-field"
                />
                {errors.date && (
                  <p className="text-red-400 text-sm mt-1">{errors.date.message}</p>
                )}
              </div>

              {/* Passengers */}
              <div>
                <label className="block text-white font-medium mb-2">
                  <Users className="w-4 h-4 inline mr-2" />
                  Passengers
                </label>
                <select
                  {...register('adults', { required: 'Number of passengers is required' })}
                  className="input-field"
                >
                  <option value="">Select passengers</option>
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                  ))}
                </select>
                {errors.adults && (
                  <p className="text-red-400 text-sm mt-1">{errors.adults.message}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Searching...</span>
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  <span>Search Flights</span>
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Popular Destinations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-heading font-bold text-white mb-6 text-center">
            POPULAR DESTINATIONS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularDestinations.map((dest, index) => (
              <motion.button
                key={dest.code}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center hover:bg-accent hover:text-white transition-all duration-300 group"
                onClick={() => {
                  // Auto-fill destination
                  const form = document.querySelector('form');
                  if (form) {
                    form.querySelector('input[name="destination"]').value = dest.code;
                  }
                }}
              >
                <Plane className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="font-heading font-bold">{dest.code}</div>
                <div className="text-sm text-text-secondary group-hover:text-white">
                  {dest.name}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-heading font-bold text-white mb-6">
              SEARCH RESULTS ({searchResults.length} flights found)
            </h2>
            
            <div className="space-y-4">
              {searchResults.map((flight, index) => (
                <motion.div
                  key={flight.id || index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
                    {/* Flight Route and Basic Info */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-white">
                            {flight.itineraries?.[0]?.segments?.[0]?.departure?.iataCode || 'N/A'}
                          </span>
                          <span className="text-accent">→</span>
                          <span className="text-2xl font-bold text-white">
                            {flight.itineraries?.[0]?.segments?.[flight.itineraries?.[0]?.segments?.length - 1]?.arrival?.iataCode || 'N/A'}
                          </span>
                        </div>
                        <span className="text-3xl font-bold text-accent">
                          ${flight.price?.total || 'N/A'}
                        </span>
                      </div>
                      
                      {/* Flight Details */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="text-text-secondary">
                          <span className="font-semibold text-white">Duration: </span>
                          {flight.itineraries?.[0]?.duration || 'N/A'}
                        </div>
                        <div className="text-text-secondary">
                          <span className="font-semibold text-white">Segments: </span>
                          {flight.itineraries?.[0]?.segments?.length || 0}
                        </div>
                        <div className="text-text-secondary">
                          <span className="font-semibold text-white">Seats: </span>
                          {flight.numberOfBookableSeats || 'N/A'}
                        </div>
                      </div>
                    </div>

                    {/* Flight Segments Details */}
                    <div className="flex-1">
                      {flight.itineraries?.[0]?.segments?.map((segment, segIndex) => (
                        <div key={segIndex} className="mb-2 p-3 bg-white/10 rounded-lg">
                          <div className="flex justify-between items-center text-sm">
                            <div className="flex items-center space-x-2">
                              <span className="font-bold text-white">
                                {segment.departure?.iataCode}
                              </span>
                              <span className="text-accent">→</span>
                              <span className="font-bold text-white">
                                {segment.arrival?.iataCode}
                              </span>
                            </div>
                            <span className="text-text-secondary">
                              {segment.carrierCode} {segment.number}
                            </span>
                          </div>
                          <div className="flex justify-between items-center text-xs text-text-secondary mt-1">
                            <span>
                              {segment.departure?.terminal ? `Terminal ${segment.departure.terminal}` : ''}
                            </span>
                            <span>
                              {segment.arrival?.terminal ? `Terminal ${segment.arrival.terminal}` : ''}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Booking Button */}
                    <div className="flex flex-col space-y-2">
                      <button className="btn-primary whitespace-nowrap">
                        Book Now
                      </button>
                      <div className="text-xs text-text-secondary text-center">
                        Flight ID: {flight.id || index}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FlightSearch; 