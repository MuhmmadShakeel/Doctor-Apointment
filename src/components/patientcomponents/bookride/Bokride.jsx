import React, { useState } from "react";

function Bokride() {
  const [search, setSearch] = useState("");
  const [filterRoute, setFilterRoute] = useState("");

  // Sample ride data
  const ridesData = [
    {
      id: 1,
      name: "Fast Delivery Rider",
      route: "City Center → Hospital",
      availableFrom: "09:00 AM",
      availableTo: "06:00 PM",
      charges: "Rs. 200 per km",
      image: "https://i.ibb.co/2n1kYxF/rider.png",
    },
    {
      id: 2,
      name: "Quick Transport",
      route: "Hospital → Pharmacy",
      availableFrom: "08:00 AM",
      availableTo: "05:00 PM",
      charges: "Rs. 150 per km",
      image: "https://i.ibb.co/2n1kYxF/rider.png",
    },
    {
      id: 3,
      name: "Express Rider",
      route: "Clinic → City Center",
      availableFrom: "10:00 AM",
      availableTo: "07:00 PM",
      charges: "Rs. 180 per km",
      image: "https://i.ibb.co/2n1kYxF/rider.png",
    },
  ];

  // Filter rides based on search and route
  const filteredRides = ridesData.filter(
    (ride) =>
      ride.name.toLowerCase().includes(search.toLowerCase()) &&
      ride.route.toLowerCase().includes(filterRoute.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-gray-50 min-h-screen">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#2563EB] mb-8 text-center">
        Book a Ride
      </h1>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row md:justify-center md:space-x-4 space-y-4 md:space-y-0 mb-12">
        <input
          type="text"
          placeholder="Search by rider name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 w-full md:w-1/2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
        />
        <input
          type="text"
          placeholder="Filter by route..."
          value={filterRoute}
          onChange={(e) => setFilterRoute(e.target.value)}
          className="px-4 py-2 w-full md:w-1/2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
        />
      </div>

      {/* Rides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRides.length === 0 && (
          <p className="text-gray-500 col-span-full text-center">
            No rides found.
          </p>
        )}

        {filteredRides.map((ride) => (
          <div
            key={ride.id}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:shadow-2xl transition duration-300"
          >
            <img
              src={ride.image}
              alt={ride.name}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h2 className="text-xl font-bold text-[#1E293B]">{ride.name}</h2>
            <p className="text-gray-500">{ride.route}</p>
            <p className="mt-2 text-gray-600">
              {ride.availableFrom} - {ride.availableTo}
            </p>
            <p className="mt-1 text-[#2563EB] font-semibold">{ride.charges}</p>
            <button className="mt-4 w-full bg-[#2563EB] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bokride;