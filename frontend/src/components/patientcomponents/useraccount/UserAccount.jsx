import React, { useState } from "react";

function UserAccount() {
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

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-[#2563EB] mb-8">My Account</h1>

      {/* Doctor Appointments Table */}
      <section className="mb-12">
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

      {/* Rides Booked Table */}
      <section className="mb-12">
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

      {/* Medications Purchased Table */}
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
    </div>
  );
}

export default UserAccount;