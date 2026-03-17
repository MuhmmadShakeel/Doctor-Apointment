import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Users, Clock, FileText, TrendingUp, Star, Activity } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function DoctorDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8" data-aos="fade-down">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Doctor Dashboard</h1>
          <p className="text-gray-600">Manage your appointments and patient care efficiently.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Today's Appointments</p>
                <p className="text-3xl font-bold text-blue-600">12</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp size={12} className="mr-1" />
                  +15% from yesterday
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Patients</p>
                <p className="text-3xl font-bold text-green-600">156</p>
                <p className="text-xs text-gray-600 mt-1">Active this month</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <Users className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay="300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Reviews</p>
                <p className="text-3xl font-bold text-yellow-600">8</p>
                <p className="text-xs text-orange-600 mt-1">Requires attention</p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay="400">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Patient Rating</p>
                <p className="text-3xl font-bold text-purple-600">4.9</p>
                <div className="flex items-center mt-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                </div>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <Activity className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8" data-aos="fade-up">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Link
              to="/doctor/appointments"
              className="bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition text-center font-medium shadow-md"
            >
              View Appointments
            </Link>
            <Link
              to="/doctor/schedule"
              className="bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition text-center font-medium shadow-md"
            >
              Manage Schedule
            </Link>
            <Link
              to="/doctor/patients"
              className="bg-purple-500 text-white px-4 py-3 rounded-lg hover:bg-purple-600 transition text-center font-medium shadow-md"
            >
              Patient Records
            </Link>
            <Link
              to="/doctor/profile"
              className="bg-yellow-500 text-white px-4 py-3 rounded-lg hover:bg-yellow-600 transition text-center font-medium shadow-md"
            >
              Update Profile
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl shadow-lg" data-aos="fade-up">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-100 hover:bg-gray-50 rounded-lg px-3 transition" data-aos="fade-right" data-aos-delay="100">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Appointment with John Doe</p>
                  <p className="text-sm text-gray-600">10:00 AM - 10:30 AM • General Checkup</p>
                </div>
              </div>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Completed</span>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-gray-100 hover:bg-gray-50 rounded-lg px-3 transition" data-aos="fade-right" data-aos-delay="200">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Appointment with Jane Smith</p>
                  <p className="text-sm text-gray-600">11:00 AM - 11:30 AM • Follow-up</p>
                </div>
              </div>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Upcoming</span>
            </div>

            <div className="flex items-center justify-between py-3 hover:bg-gray-50 rounded-lg px-3 transition" data-aos="fade-right" data-aos-delay="300">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">New patient registration</p>
                  <p className="text-sm text-gray-600">Sarah Wilson • 2 hours ago</p>
                </div>
              </div>
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">New</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;