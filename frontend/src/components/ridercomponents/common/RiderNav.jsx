import React, { useState } from "react";
import { Link } from "react-router-dom";

function RiderNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo / Title */}
        <div className="text-2xl font-bold text-[#2563EB]">
          Rider Dashboard
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/rider/dashboard"
            className="text-gray-700 hover:text-[#2563EB] font-medium transition"
          >
            Dashboard
          </Link>

          <Link
            to="/rider/rides"
            className="text-gray-700 hover:text-[#2563EB] font-medium transition"
          >
            My Rides
          </Link>

          <Link
            to="/rider/schedule"
            className="text-gray-700 hover:text-[#2563EB] font-medium transition"
          >
            Schedule
          </Link>

          <Link
            to="/rider/earnings"
            className="text-gray-700 hover:text-[#2563EB] font-medium transition"
          >
            Earnings
          </Link>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <img
                src="https://i.ibb.co/2n1kYxF/rider.png"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-medium text-gray-700">
                Rider
              </span>
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
                <Link
                  to="/rider/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <button
                  className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 px-4">
          <Link
            to="/rider/dashboard"
            className="block text-gray-700 hover:text-[#2563EB]"
          >
            Dashboard
          </Link>

          <Link
            to="/rider/rides"
            className="block text-gray-700 hover:text-[#2563EB]"
          >
            My Rides
          </Link>

          <Link
            to="/rider/schedule"
            className="block text-gray-700 hover:text-[#2563EB]"
          >
            Schedule
          </Link>

          <Link
            to="/rider/earnings"
            className="block text-gray-700 hover:text-[#2563EB]"
          >
            Earnings
          </Link>

          <Link
            to="/rider/profile"
            className="block text-gray-700 hover:text-[#2563EB]"
          >
            Profile
          </Link>

          <button className="block text-red-500">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default RiderNav;