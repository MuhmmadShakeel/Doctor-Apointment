import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, ChevronDown, User } from "lucide-react";
import BillingCart from "./BillingCart";
import { useSelector } from "react-redux";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Get cart items from Redux
  const { items } = useSelector((state) => state.billing);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-[#2563EB]">MediLink</Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/doctors" className="hover:text-blue-600">Doctors</Link>
            <Link to="/medication" className="hover:text-blue-600">Medication</Link>
            <Link to="/bookride" className="hover:text-blue-600">Book Ride</Link>
            <Link to="/login" className="hover:text-blue-600">Login</Link>
            <Link to="/signup" className="hover:text-blue-600">Signup</Link>
            <Link to="/profile" className="hover:text-blue-600">Profile</Link>
            <Link to="/account" className="hover:text-blue-600">Manage Account</Link>

            {/* Dashboard Dropdown */}
            <div className="relative dropdown">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-1 hover:text-blue-600 transition"
              >
                <User size={20} />
                <span>Dashboard</span>
                <ChevronDown size={16} />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                  <Link
                    to="/doctor/dashboard"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Doctor Dashboard
                  </Link>
                  <Link
                    to="/rider/dashboard"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Rider Dashboard
                  </Link>
                  <Link
                    to="/admin/dashboard"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Admin Dashboard
                  </Link>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Cart Button */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 hover:text-blue-600 transition"
            >
              <ShoppingCart size={24} />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  {items.length}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="px-6 py-4 space-y-4">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/doctors" onClick={() => setIsOpen(false)}>Doctors</Link>
            <Link to="/medication" onClick={() => setIsOpen(false)}>Medication</Link>
            <Link to="/bookride" onClick={() => setIsOpen(false)}>Book Ride</Link>
            <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
            <Link to="/signup" onClick={() => setIsOpen(false)}>Signup</Link>
            <Link to="/profile" onClick={() => setIsOpen(false)}>Profile</Link>
            <Link to="/account" onClick={() => setIsOpen(false)}>Manage Account</Link>
            <div className="border-t pt-4">
              <p className="text-sm font-semibold text-gray-600 mb-2">Dashboard</p>
              <Link to="/doctor/dashboard" onClick={() => setIsOpen(false)} className="block py-1">Doctor Dashboard</Link>
              <Link to="/rider/dashboard" onClick={() => setIsOpen(false)} className="block py-1">Rider Dashboard</Link>
              <Link to="/admin/dashboard" onClick={() => setIsOpen(false)} className="block py-1">Admin Dashboard</Link>
              <button onClick={() => setIsOpen(false)} className="block py-1 w-full text-left">Logout</button>
            </div>
            {/* Cart Button for Mobile */}
            <button
              onClick={() => { setCartOpen(true); setIsOpen(false); }}
              className="relative p-2 hover:text-blue-600 transition flex items-center w-full justify-start"
            >
              <ShoppingCart size={24} className="mr-2" />
              Cart
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  {items.length}
                </span>
              )}
            </button>
          </div>
        </div>
      )}

      {/* BillingCart Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full lg:w-1/3 bg-white shadow-2xl z-50 transition-transform duration-300 ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-4">
          <button onClick={() => setCartOpen(false)} className="text-gray-600 hover:text-red-500">
            <X size={28} />
          </button>
        </div>
        <BillingCart />
      </div>
    </>
  );
}

export default Navbar;