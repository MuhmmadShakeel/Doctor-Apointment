import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast"; // ✅ CORRECT IMPORT

function Doctor() {
  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("All");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    symptoms: "",
  });

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const doctors = [
    {
      name: "Dr. Sarah Khan",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
      specialization: "Cardiologist",
      qualification: "MBBS, MD Cardiology",
      availability: "Available",
    },
    {
      name: "Dr. Ali Raza",
      image:
        "https://images.pexels.com/photos/532470/pexels-photo-532470.jpeg",
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

  const openModal = (doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      symptoms: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Check if form is filled
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.date ||
      !formData.time ||
      !formData.symptoms
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    // 🔥 Later you will add API call here

    toast.success("Appointment booked successfully 🎉");

    closeModal();
  };

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
        {filteredDoctors.map((doc, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300"
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
                doc.availability === "Available"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {doc.availability}
            </p>

            <button
              disabled={doc.availability !== "Available"}
              onClick={() => openModal(doc)}
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

      {/* Appointment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-8 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-[#2563EB] mb-6">
              Book Appointment with {selectedDoctor?.name}
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#2563EB]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#2563EB]"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#2563EB]"
              />

              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#2563EB]"
              />

              <input
                type="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#2563EB]"
              />

              <textarea
                name="symptoms"
                placeholder="Describe Symptoms"
                rows="3"
                required
                value={formData.symptoms}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 md:col-span-2 focus:ring-2 focus:ring-[#2563EB]"
              ></textarea>

              <button
                type="submit"
                className="md:col-span-2 bg-[#2563EB] text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Confirm Appointment
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Doctor;