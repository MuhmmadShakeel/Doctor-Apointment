import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#2563EB]">
          MediCare
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-[#1E293B] font-medium">
          <Link to="/" className="hover:text-[#2563EB] transition">Home</Link>
          <Link to="/about" className="hover:text-[#2563EB] transition">About</Link>
          <Link to="/services" className="hover:text-[#2563EB] transition">Services</Link>
          <Link to="/doctors" className="hover:text-[#2563EB] transition">Doctors</Link>
          <Link to="/appointments" className="hover:text-[#2563EB] transition">Appointments</Link>
          <Link to="/contact" className="hover:text-[#2563EB] transition">Contact</Link>

          <Link 
            to="/login" 
            className="px-4 py-2 border border-[#14B8A6] text-[#14B8A6] rounded-lg hover:bg-[#14B8A6] hover:text-white transition"
          >
            Login
          </Link>

          <Link 
            to="/signup" 
            className="px-4 py-2 bg-[#2563EB] text-white rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-6 space-y-4 text-[#1E293B] font-medium">
          <Link to="/" onClick={() => setIsOpen(false)} className="block">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block">About</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block">Services</Link>
          <Link to="/doctors" onClick={() => setIsOpen(false)} className="block">Doctors</Link>
          <Link to="/appointments" onClick={() => setIsOpen(false)} className="block">Appointments</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block">Contact</Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="block">Login</Link>
          <Link to="/signup" onClick={() => setIsOpen(false)} className="block">Sign Up</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;