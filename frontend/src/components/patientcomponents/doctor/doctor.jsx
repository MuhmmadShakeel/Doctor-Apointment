import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Doctor() {
  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const doctors = [
    {
      name: "Dr. Sarah Khan",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg", // Pexels doctor
      specialization: "Cardiologist",
      qualification: "MBBS, MD Cardiology",
      availability: "Available",
    },
    {
      name: "Dr. Ali Raza",
      image:
        "https://images.pexels.com/photos/532470/pexels-photo-532470.jpeg", // Pexels doctor
      specialization: "Pediatrician",
      qualification: "MBBS, FCPS Pediatrics",
      availability: "Not Available",
    },
    {
      name: "Dr. Maria Ahmed",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      specialization: "Dermatologist",
      qualification: "MBBS, Dermatology Specialist",
      availability: "Available",
    },
  ];

  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(search.toLowerCase()) &&
      (specialization === "All" || doc.specialization === specialization)
  );

  const specializations = ["All", "Cardiologist", "Pediatrician", "Dermatologist"];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-8 gap-4">
        <input
          type="text"
          placeholder="Search Doctor..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        >
          {specializations.map((spec) => (
            <option key={spec} value={spec}>
              {spec}
            </option>
          ))}
        </select>
      </div>

      {/* Doctor Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {filteredDoctors.length === 0 && (
          <p className="text-gray-500 col-span-full text-center">No Doctors Found</p>
        )}

        {filteredDoctors.map((doc, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between hover:shadow-2xl transition duration-300"
          >
            <img
              src={doc.image}
              alt={doc.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-bold text-[#1E293B]">{doc.name}</h2>
            <p className="text-gray-500">{doc.specialization}</p>
            <p className="text-gray-500">{doc.qualification}</p>
            <p
              className={`mt-1 font-medium ${
                doc.availability === "Available" ? "text-green-500" : "text-red-500"
              }`}
            >
              {doc.availability}
            </p>
            <button
              disabled={doc.availability !== "Available"}
              className={`mt-4 w-full px-4 py-2 rounded-lg text-white transition ${
                doc.availability === "Available"
                  ? "bg-[#2563EB] hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctor;