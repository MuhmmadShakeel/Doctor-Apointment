import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Heart, Stethoscope, Truck, Shield } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            MediLink
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 text-gray-700 font-medium">

          <Link to="/" className="relative group hover:text-blue-600 transition-colors duration-200">
            <span>Home</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
          </Link>

          <Link to="/about" className="relative group hover:text-blue-600 transition-colors duration-200">
            <span>About</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
          </Link>

          <Link to="/doctors" className="relative group hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1">
            <Stethoscope className="w-4 h-4" />
            <span>Doctors</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
          </Link>

          <Link to="/medication" className="relative group hover:text-blue-600 transition-colors duration-200">
            <span>Medication</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
          </Link>

          <Link to="/bookride" className="relative group hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1">
            <Truck className="w-4 h-4" />
            <span>Book Ride</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
          </Link>

          <Link to="/contact" className="relative group hover:text-blue-600 transition-colors duration-200">
            <span>Contact</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
          </Link>

          {/* Dashboard Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDashboardOpen(!dashboardOpen)}
              className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-200"
            >
              <Shield className="w-4 h-4" />
              <span>Dashboards</span>
              <ChevronDown size={16} className={`transition-transform duration-200 ${dashboardOpen ? 'rotate-180' : ''}`} />
            </button>

            {dashboardOpen && (
              <div className="absolute top-12 left-0 bg-white/95 backdrop-blur-md shadow-xl rounded-xl w-56 py-3 border border-gray-100 animate-in slide-in-from-top-2 duration-200">
                <Link
                  to="/doctor/dashboard"
                  className="flex items-center space-x-3 px-4 py-3 hover:bg-blue-50 transition-colors duration-200"
                >
                  <Stethoscope className="w-5 h-5 text-green-600" />
                  <span className="font-medium">Doctor Dashboard</span>
                </Link>
                <Link
                  to="/rider/dashboard"
                  className="flex items-center space-x-3 px-4 py-3 hover:bg-blue-50 transition-colors duration-200"
                >
                  <Truck className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">Rider Dashboard</span>
                </Link>
                <Link
                  to="/admin/dashboard"
                  className="flex items-center space-x-3 px-4 py-3 hover:bg-blue-50 transition-colors duration-200"
                >
                  <Shield className="w-5 h-5 text-purple-600" />
                  <span className="font-medium">Admin Dashboard</span>
                </Link>
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <img
                src="https://i.ibb.co/2n1kYxF/rider.png"
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover border-2 border-gray-200"
              />
              <ChevronDown size={16} className={`transition-transform duration-200 ${profileOpen ? 'rotate-180' : ''}`} />
            </button>

            {profileOpen && (
              <div className="absolute top-12 right-0 bg-white/95 backdrop-blur-md shadow-xl rounded-xl w-48 py-3 border border-gray-100 animate-in slide-in-from-top-2 duration-200">
                <Link
                  to="/account"
                  className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-medium">My Account</span>
                </Link>
                <Link
                  to="/settings"
                  className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-medium">Settings</span>
                </Link>
                <hr className="my-2 border-gray-200" />
                <button className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 transition-colors duration-200 font-medium">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors duration-200 p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 animate-in slide-in-from-top-2 duration-300">
          <div className="px-6 py-4 space-y-4">
            <Link
              to="/"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/doctors"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Doctors
            </Link>
            <Link
              to="/medication"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Medication
            </Link>
            <Link
              to="/bookride"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Book Ride
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <div className="border-t border-gray-200 pt-4">
              <p className="text-sm font-semibold text-gray-900 mb-3">Dashboards</p>
              <Link
                to="/doctor/dashboard"
                className="block py-2 text-gray-700 hover:text-green-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Doctor Dashboard
              </Link>
              <Link
                to="/rider/dashboard"
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Rider Dashboard
              </Link>
              <Link
                to="/admin/dashboard"
                className="block py-2 text-gray-700 hover:text-purple-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Admin Dashboard
              </Link>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <Link
                to="/account"
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                My Account
              </Link>
              <button className="block py-2 text-red-600 hover:text-red-700 transition-colors duration-200 font-medium">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close dropdowns */}
      {(dashboardOpen || profileOpen) && (
        <div
          className="fixed inset-0 z-[-1]"
          onClick={() => {
            setDashboardOpen(false);
            setProfileOpen(false);
          }}
        />
      )}
    </nav>
  );
}

export default Navbar;