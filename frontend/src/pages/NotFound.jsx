import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search, Heart } from "lucide-react";

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <div className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text animate-pulse">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Heart className="w-16 h-16 text-red-400 animate-bounce" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>

        {/* Search Suggestion */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <Search className="w-6 h-6 text-gray-400 mr-2" />
            <span className="text-gray-600 font-medium">Try these popular pages:</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Link
              to="/doctors"
              className="p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200 text-center"
            >
              <span className="text-sm font-medium text-blue-700">Find Doctors</span>
            </Link>
            <Link
              to="/bookride"
              className="p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200 text-center"
            >
              <span className="text-sm font-medium text-green-700">Book Ride</span>
            </Link>
            <Link
              to="/medication"
              className="p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors duration-200 text-center"
            >
              <span className="text-sm font-medium text-purple-700">Medication</span>
            </Link>
            <Link
              to="/login"
              className="p-3 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors duration-200 text-center"
            >
              <span className="text-sm font-medium text-indigo-700">Login</span>
            </Link>
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 mb-2">Need help?</p>
          <a
            href="mailto:support@medilink.com"
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;