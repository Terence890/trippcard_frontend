import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Hotel, Calendar, Users, Search, MapPin, Star } from 'lucide-react';
import axios from 'axios';

const HotelSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.get('/api/hotel-search', {
        params: {
          location: data.location,
          checkIn: data.checkIn,
          checkOut: data.checkOut,
          guests: data.guests
        }
      });
      
      setSearchResults(response.data);
      toast.success('Hotels found successfully!');
    } catch (error) {
      console.error('Hotel search error:', error);
      toast.error(error.response?.data?.error || 'Failed to search hotels');
    } finally {
      setIsLoading(false);
    }
  };

  const popularCities = [
    { name: 'New York', country: 'USA', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400' },
    { name: 'London', country: 'UK', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400' },
    { name: 'Paris', country: 'France', image: 'https://images.unsplash.com/photo-1502602898535-ee94826c192e?w=400' },
    { name: 'Tokyo', country: 'Japan', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400' },
    { name: 'Sydney', country: 'Australia', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400' },
    { name: 'Singapore', country: 'Singapore', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400' }
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
            FIND HOTELS
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Discover amazing hotels worldwide with competitive rates
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
              {/* Location */}
              <div>
                <label className="block text-white font-medium mb-2">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Destination
                </label>
                <input
                  {...register('location', { required: 'Location is required' })}
                  className="input-field"
                  placeholder="City, Country"
                />
                {errors.location && (
                  <p className="text-red-400 text-sm mt-1">{errors.location.message}</p>
                )}
              </div>

              {/* Guests */}
              <div>
                <label className="block text-white font-medium mb-2">
                  <Users className="w-4 h-4 inline mr-2" />
                  Guests
                </label>
                <select
                  {...register('guests', { required: 'Number of guests is required' })}
                  className="input-field"
                >
                  <option value="">Select guests</option>
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
                {errors.guests && (
                  <p className="text-red-400 text-sm mt-1">{errors.guests.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Check-in Date */}
              <div>
                <label className="block text-white font-medium mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Check-in Date
                </label>
                <input
                  {...register('checkIn', { required: 'Check-in date is required' })}
                  type="date"
                  className="input-field"
                />
                {errors.checkIn && (
                  <p className="text-red-400 text-sm mt-1">{errors.checkIn.message}</p>
                )}
              </div>

              {/* Check-out Date */}
              <div>
                <label className="block text-white font-medium mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Check-out Date
                </label>
                <input
                  {...register('checkOut', { required: 'Check-out date is required' })}
                  type="date"
                  className="input-field"
                />
                {errors.checkOut && (
                  <p className="text-red-400 text-sm mt-1">{errors.checkOut.message}</p>
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
                  <span>Search Hotels</span>
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Popular Cities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-heading font-bold text-white mb-6 text-center">
            POPULAR DESTINATIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCities.map((city, index) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card overflow-hidden group cursor-pointer hover:bg-white/20 transition-all duration-300"
                onClick={() => {
                  const form = document.querySelector('form');
                  if (form) {
                    form.querySelector('input[name="location"]').value = city.name;
                  }
                }}
              >
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-heading font-bold text-lg">{city.name}</h3>
                    <p className="text-text-secondary">{city.country}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Explore hotels</span>
                  <Hotel className="w-5 h-5 text-accent" />
                </div>
              </motion.div>
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
              SEARCH RESULTS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((hotel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card hover:bg-white/20 transition-all duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-primary-light to-primary-dark rounded-lg mb-4 flex items-center justify-center">
                    <Hotel className="w-16 h-16 text-white/50" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-heading font-bold text-white">{hotel.name || 'Hotel Name'}</h3>
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map(star => (
                          <Star key={star} className="w-4 h-4 text-accent fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-text-secondary text-sm mb-3">{hotel.location || 'Location'}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-accent font-bold text-lg">
                        ${hotel.price || '199'}/night
                      </span>
                      <button className="btn-primary">
                        Book Now
                      </button>
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

export default HotelSearch; 