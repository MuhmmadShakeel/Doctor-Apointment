import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, DollarSign, CheckCircle, TrendingUp, Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function RiderDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8" data-aos="fade-down">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Rider Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your performance overview.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Today's Rides</p>
                <p className="text-3xl font-bold text-blue-600">8</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp size={12} className="mr-1" />
                  +12% from yesterday
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Hours Online</p>
                <p className="text-3xl font-bold text-green-600">6.5</p>
                <p className="text-xs text-gray-600 mt-1">Target: 8 hours</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay="300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Today's Earnings</p>
                <p className="text-3xl font-bold text-yellow-600">$127.50</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp size={12} className="mr-1" />
                  +8% from yesterday
                </p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <DollarSign className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay="400">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Rating</p>
                <p className="text-3xl font-bold text-purple-600">4.8</p>
                <div className="flex items-center mt-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                </div>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8" data-aos="fade-up">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Link
              to="/rider/rides"
              className="bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition text-center font-medium shadow-md"
            >
              View Active Rides
            </Link>
            <Link
              to="/rider/schedule"
              className="bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition text-center font-medium shadow-md"
            >
              My Schedule
            </Link>
            <Link
              to="/rider/earnings"
              className="bg-yellow-500 text-white px-4 py-3 rounded-lg hover:bg-yellow-600 transition text-center font-medium shadow-md"
            >
              Earnings Report
            </Link>
            <Link
              to="/rider/profile"
              className="bg-purple-500 text-white px-4 py-3 rounded-lg hover:bg-purple-600 transition text-center font-medium shadow-md"
            >
              Update Profile
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl shadow-lg" data-aos="fade-up">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Rides</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-100 hover:bg-gray-50 rounded-lg px-3 transition" data-aos="fade-right" data-aos-delay="100">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Ride to Downtown Hospital</p>
                  <p className="text-sm text-gray-600">Pickup: 123 Main St - Dropoff: City Hospital</p>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Completed</span>
                <p className="text-sm font-semibold text-gray-900 mt-1">$15.00</p>
              </div>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-gray-100 hover:bg-gray-50 rounded-lg px-3 transition" data-aos="fade-right" data-aos-delay="200">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Medical Delivery</p>
                  <p className="text-sm text-gray-600">Pharmacy to Patient Home</p>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">In Progress</span>
                <p className="text-sm font-semibold text-gray-900 mt-1">$8.50</p>
              </div>
            </div>

            <div className="flex items-center justify-between py-3 hover:bg-gray-50 rounded-lg px-3 transition" data-aos="fade-right" data-aos-delay="300">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Emergency Transport</p>
                  <p className="text-sm text-gray-600">Hospital A to Hospital B</p>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Assigned</span>
                <p className="text-sm font-semibold text-gray-900 mt-1">$25.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RiderDashboard;