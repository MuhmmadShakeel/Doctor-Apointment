import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Users, UserCheck, Truck, BarChart3, TrendingUp, Shield, Activity } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8" data-aos="fade-down">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Monitor and manage the entire MediLink platform.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-3xl font-bold text-blue-600">1,234</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp size={12} className="mr-1" />
                  +5% this month
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Doctors</p>
                <p className="text-3xl font-bold text-green-600">89</p>
                <p className="text-xs text-gray-600 mt-1">Verified professionals</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <UserCheck className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay="300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Riders</p>
                <p className="text-3xl font-bold text-yellow-600">45</p>
                <p className="text-xs text-green-600 mt-1">On duty now</p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <Truck className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay="400">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Rides</p>
                <p className="text-3xl font-bold text-purple-600">567</p>
                <p className="text-xs text-blue-600 mt-1">This week</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8" data-aos="fade-up">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Link
              to="/admin/users"
              className="bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition text-center font-medium shadow-md"
            >
              Manage Users
            </Link>
            <Link
              to="/admin/doctors"
              className="bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition text-center font-medium shadow-md"
            >
              Manage Doctors
            </Link>
            <Link
              to="/admin/riders"
              className="bg-yellow-500 text-white px-4 py-3 rounded-lg hover:bg-yellow-600 transition text-center font-medium shadow-md"
            >
              Manage Riders
            </Link>
            <Link
              to="/admin/reports"
              className="bg-purple-500 text-white px-4 py-3 rounded-lg hover:bg-purple-600 transition text-center font-medium shadow-md"
            >
              View Reports
            </Link>
          </div>
        </div>

        {/* System Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg" data-aos="fade-right">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Shield className="h-5 w-5 text-green-600 mr-2" />
              System Health
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Server Status</span>
                <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Online</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Database</span>
                <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Healthy</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">API Response</span>
                <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">98.5%</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg" data-aos="fade-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Activity className="h-5 w-5 text-blue-600 mr-2" />
              Recent Activity
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">New doctor registered</p>
                  <p className="text-xs text-gray-600">Dr. Emily Johnson • 2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Rider onboarded</p>
                  <p className="text-xs text-gray-600">Mike Wilson • 4 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">System maintenance completed</p>
                  <p className="text-xs text-gray-600">6 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl shadow-lg" data-aos="fade-up">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Platform Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">98.2%</div>
              <p className="text-sm text-gray-600">User Satisfaction</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '98.2%'}}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">99.9%</div>
              <p className="text-sm text-gray-600">Uptime</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-green-600 h-2 rounded-full" style={{width: '99.9%'}}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">4.7</div>
              <p className="text-sm text-gray-600">Average Rating</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{width: '94%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;