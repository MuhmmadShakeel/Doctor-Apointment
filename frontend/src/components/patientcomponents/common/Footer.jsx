import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Heart, Mail, Phone, MapPin, Shield, Award, Clock } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Brand & Description */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  MediLink
                </span>
              </Link>
              <p className="text-gray-300 leading-relaxed mb-6">
                Your trusted healthcare partner. Connecting patients with certified doctors and reliable medical transportation services.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 text-green-400">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm">Secure</span>
                </div>
                <div className="flex items-center space-x-1 text-blue-400">
                  <Award className="w-4 h-4" />
                  <span className="text-sm">Certified</span>
                </div>
                <div className="flex items-center space-x-1 text-purple-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">24/7</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white relative">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-linear-to-r from-blue-400 to-indigo-400"></span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/doctors" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    <span>Find Doctors</span>
                  </Link>
                </li>
                <li>
                  <Link to="/medication" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    <span>Medication</span>
                  </Link>
                </li>
                <li>
                  <Link to="/bookride" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    <span>Book Ambulance</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white relative">
                Our Services
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-linear-to-r from-green-400 to-teal-400"></span>
              </h3>
              <ul className="space-y-3">
                <li className="text-gray-300 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                  <span>Online Consultations</span>
                </li>
                <li className="text-gray-300 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                  <span>Emergency Transport</span>
                </li>
                <li className="text-gray-300 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                  <span>Medicine Delivery</span>
                </li>
                <li className="text-gray-300 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                  <span>Health Monitoring</span>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white relative">
                Get In Touch
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-linear-to-r from-purple-400 to-pink-400"></span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400 mt-0.5 shrink-0" />
                  <span className="text-gray-300 text-sm">123 Health Street, Bahawalpur, Pakistan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-purple-400 shrink-0" />
                  <span className="text-gray-300 text-sm">+92 300 1234567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-purple-400 shrink-0" />
                  <span className="text-gray-300 text-sm">support@medilink.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <p className="text-sm text-gray-400 mb-3">Follow Us</p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-200 group">
                    <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors duration-200 group">
                    <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-200 group">
                    <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-200 group">
                    <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} MediLink. All rights reserved. Made with <Heart className="w-4 h-4 inline text-red-500" /> for better healthcare.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link to="/support" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;