import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">About JKSS</h3>
            <p className="text-gray-400">
              Jan Kalyan Sewa Samiti is dedicated to providing quality IT education 
              and empowering students with the skills needed for success in the 
              digital age.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-white transition duration-300">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition duration-300">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Email: jkss.jnp@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Phone: +91 9454777000</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-6 h-6" />
                <span>Address: Indrasani Complex, Balua Ghat, Azamgarh Road, Near Hotel River View, Jaunpur, Uttar Pradesh, 222001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Jan Kalyan Sewa Samiti (JKSS). All rights reserved.</p>
          
          {/* Made with Love by Kishan */}
          <div className="mt-4 flex items-center justify-center text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" fill="currentColor" />
            <span>by</span>
            <span className="ml-1 font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-purple-500 hover:to-blue-400 transition-all duration-500">
              Kishan
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;