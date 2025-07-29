import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plane, Hotel, Calendar, Globe, Shield, Clock } from 'lucide-react';
import Logo from '../components/Logo';
import Hyperspeed from '../components/Hyperspeed';

const Home = () => {
  const features = [
    {
      icon: Plane,
      title: 'FLIGHT SEARCH',
      description: 'Find the best flight deals with real-time pricing and instant booking.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Hotel,
      title: 'HOTEL BOOKING',
      description: 'Discover amazing hotels worldwide with competitive rates and great amenities.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Calendar,
      title: 'TRIP PLANNING',
      description: 'Plan your perfect trip with our comprehensive booking management system.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Globe,
      title: 'WORLDWIDE COVERAGE',
      description: 'Access to destinations across the globe with local expertise.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Shield,
      title: 'SECURE BOOKING',
      description: 'Your data and payments are protected with bank-level security.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Clock,
      title: '24/7 SUPPORT',
      description: 'Round-the-clock customer support for all your travel needs.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Hyperspeed Background */}
      <div className="absolute inset-0 z-0">
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => { },
            onSlowDown: () => { },
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xFFFFFF,
              brokenLines: 0xFFFFFF,
              leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
              rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
              sticks: 0x03B3C3,
            }
          }}
        />
      </div>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden z-10">
        <div className="absolute inset-0 hero-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <Logo size="xl" showTagline={true} />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
              DISCOVER THE WORLD
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto font-tagline font-light italic">
              Your journey begins here. Book flights, hotels, and create unforgettable memories with Trippcard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/flights" className="btn-primary">
                Search Flights
              </Link>
              <Link to="/hotels" className="btn-secondary">
                Find Hotels
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              WHY CHOOSE TRIPPCARD
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Experience the difference with our comprehensive travel platform designed for modern travelers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              READY TO START YOUR JOURNEY?
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Join thousands of travelers who trust Trippcard for their adventures.
            </p>
            <Link to="/flights" className="btn-primary text-lg px-8 py-4">
              Start Exploring
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 