import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Medication() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const medications = [
    {
      name: "Paracetamol 500mg",
      image:
        "https://d1ymz67w5raq8g.cloudfront.net/Pictures/2000xAny/1/2/0/532120_paracetamolbackgroundinformationcoverimage_807319_crop.jpg", // Pexels tablets
      category: "Analgesic / Pain Relief",
      price: "$5 / strip",
      availability: "In Stock",
    },
    {
      name: "Amoxicillin 250mg",
      image:
        "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg", // Pexels medicine
      category: "Antibiotic",
      price: "$10 / strip",
      availability: "In Stock",
    },
    {
      name: "Cetirizine 10mg",
      image:
        "https://smarthealer.pk/wp-content/uploads/2024/09/cetirizine-tablet.webp", // Pexels pills
      category: "Antihistamine",
      price: "$7 / strip",
      availability: "Out of Stock",
    },
  ];

  const filteredMeds = medications.filter(
    (med) =>
      med.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || med.category === category)
  );

  const categories = [
    "All",
    "Analgesic / Pain Relief",
    "Antibiotic",
    "Antihistamine",
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-8 gap-4">
        <input
          type="text"
          placeholder="Search Medication..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Medication Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {filteredMeds.length === 0 && (
          <p className="text-gray-500 col-span-full text-center">
            No Medications Found
          </p>
        )}

        {filteredMeds.map((med, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between hover:shadow-2xl transition duration-300"
          >
            <img
              src={med.image}
              alt={med.name}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />

            <h2 className="text-lg font-bold text-[#1E293B]">{med.name}</h2>
            <p className="text-gray-500">{med.category}</p>
            <p className="mt-2 text-[#2563EB] font-semibold">{med.price}</p>
            <p
              className={`mt-1 font-medium ${
                med.availability === "In Stock"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {med.availability}
            </p>

            <div className="mt-4 flex gap-4">
              <button className="flex-1 bg-[#2563EB] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Add to Cart
              </button>
              <button className="flex-1 border border-[#14B8A6] text-[#14B8A6] px-4 py-2 rounded-lg hover:bg-[#14B8A6] hover:text-white transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Medication;