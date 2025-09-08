import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-primary-dark mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Logo size="default" showTagline={true} />
            </div>
            <p className="text-text-secondary mb-4 max-w-md">
              Your ultimate travel companion. Discover amazing destinations, book flights and hotels with ease, and create unforgettable memories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-secondary hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-secondary hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-secondary hover:text-accent transition-colors">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <a href="/flights" className="text-text-secondary hover:text-accent transition-colors">
                  Flights
                </a>
              </li>
              <li>
                <a href="/hotels" className="text-text-secondary hover:text-accent transition-colors">
                  Hotels
                </a>
              </li>
              <li>
                <a href="/bookings" className="text-text-secondary hover:text-accent transition-colors">
                  My Bookings
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-heading font-bold mb-4">SUPPORT</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-text-secondary hover:text-accent transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-accent transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-text-secondary">
            © 2025 Trippcard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 