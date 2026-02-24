import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add backend login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#2563EB] text-center">
          Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-[#2563EB] hover:underline text-sm">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#2563EB] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="text-[#2563EB] hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;