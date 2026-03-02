import React, { useState } from "react";

function UserAccount() {
  const [activeTab, setActiveTab] = useState("overview");

  // Sample data (replace with backend data later)
  const doctorAppointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Khan",
      specialization: "Cardiologist",
      date: "2026-03-01",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      doctor: "Dr. Ali Raza",
      specialization: "Pediatrician",
      date: "2026-03-05",
      time: "02:00 PM",
      status: "Pending",
    },
  ];

  const ridesBooked = [
    {
      id: 1,
      rider: "Fast Delivery Rider",
      route: "City Center → Hospital",
      date: "2026-02-25",
      time: "09:30 AM",
      charges: "Rs. 200",
    },
    {
      id: 2,
      rider: "Express Rider",
      route: "Clinic → City Center",
      date: "2026-02-26",
      time: "11:00 AM",
      charges: "Rs. 180",
    },
  ];

  const medicationsPurchased = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      category: "Analgesic / Pain Relief",
      quantity: 2,
      price: "$10",
    },
    {
      id: 2,
      name: "Amoxicillin 250mg",
      category: "Antibiotic",
      quantity: 1,
      price: "$10",
    },
  ];

  const totalAppointments = doctorAppointments.length;
  const totalRides = ridesBooked.length;
  const totalMedications = medicationsPurchased.length;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-[#2563EB] mb-8">My Account Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-lg font-semibold text-[#1E293B] mb-2">Total Appointments</h3>
          <p className="text-3xl font-bold text-[#2563EB]">{totalAppointments}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-lg font-semibold text-[#1E293B] mb-2">Total Rides Booked</h3>
          <p className="text-3xl font-bold text-[#2563EB]">{totalRides}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-lg font-semibold text-[#1E293B] mb-2">Total Medications</h3>
          <p className="text-3xl font-bold text-[#2563EB]">{totalMedications}</p>
        </div>
      </div>

      {/* Tab Buttons */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setActiveTab("overview")}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            activeTab === "overview"
              ? "bg-[#2563EB] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("appointments")}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            activeTab === "appointments"
              ? "bg-[#2563EB] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Appointments
        </button>
        <button
          onClick={() => setActiveTab("rides")}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            activeTab === "rides"
              ? "bg-[#2563EB] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Rides
        </button>
        <button
          onClick={() => setActiveTab("medications")}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            activeTab === "medications"
              ? "bg-[#2563EB] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Medications
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "overview" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-[#1E293B] mb-4">Recent Appointments</h3>
            <ul className="space-y-2">
              {doctorAppointments.slice(0, 3).map((app) => (
                <li key={app.id} className="text-sm text-gray-600">
                  {app.doctor} - {app.date} at {app.time}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-[#1E293B] mb-4">Recent Rides</h3>
            <ul className="space-y-2">
              {ridesBooked.slice(0, 3).map((ride) => (
                <li key={ride.id} className="text-sm text-gray-600">
                  {ride.route} - {ride.date}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-[#1E293B] mb-4">Recent Medications</h3>
            <ul className="space-y-2">
              {medicationsPurchased.slice(0, 3).map((med) => (
                <li key={med.id} className="text-sm text-gray-600">
                  {med.name} - Qty: {med.quantity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {activeTab === "appointments" && (
        <section>
          <h2 className="text-xl font-semibold text-[#1E293B] mb-4">
            Doctor Appointments
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded-lg shadow-sm">
              <thead className="bg-[#2563EB] text-white">
                <tr>
                  <th className="py-2 px-4 text-left">Doctor</th>
                  <th className="py-2 px-4 text-left">Specialization</th>
                  <th className="py-2 px-4 text-left">Date</th>
                  <th className="py-2 px-4 text-left">Time</th>
                  <th className="py-2 px-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {doctorAppointments.map((app) => (
                  <tr key={app.id} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{app.doctor}</td>
                    <td className="py-2 px-4">{app.specialization}</td>
                    <td className="py-2 px-4">{app.date}</td>
                    <td className="py-2 px-4">{app.time}</td>
                    <td
                      className={`py-2 px-4 font-semibold ${
                        app.status === "Confirmed"
                          ? "text-green-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {app.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {activeTab === "rides" && (
        <section>
          <h2 className="text-xl font-semibold text-[#1E293B] mb-4">Rides Booked</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded-lg shadow-sm">
              <thead className="bg-[#2563EB] text-white">
                <tr>
                  <th className="py-2 px-4 text-left">Rider</th>
                  <th className="py-2 px-4 text-left">Route</th>
                  <th className="py-2 px-4 text-left">Date</th>
                  <th className="py-2 px-4 text-left">Time</th>
                  <th className="py-2 px-4 text-left">Charges</th>
                </tr>
              </thead>
              <tbody>
                {ridesBooked.map((ride) => (
                  <tr key={ride.id} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{ride.rider}</td>
                    <td className="py-2 px-4">{ride.route}</td>
                    <td className="py-2 px-4">{ride.date}</td>
                    <td className="py-2 px-4">{ride.time}</td>
                    <td className="py-2 px-4">{ride.charges}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {activeTab === "medications" && (
        <section>
          <h2 className="text-xl font-semibold text-[#1E293B] mb-4">
            Medications Purchased
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded-lg shadow-sm">
              <thead className="bg-[#2563EB] text-white">
                <tr>
                  <th className="py-2 px-4 text-left">Medication</th>
                  <th className="py-2 px-4 text-left">Category</th>
                  <th className="py-2 px-4 text-left">Quantity</th>
                  <th className="py-2 px-4 text-left">Price</th>
                </tr>
              </thead>
              <tbody>
                {medicationsPurchased.map((med) => (
                  <tr key={med.id} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{med.name}</td>
                    <td className="py-2 px-4">{med.category}</td>
                    <td className="py-2 px-4">{med.quantity}</td>
                    <td className="py-2 px-4">{med.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}

export default UserAccount;