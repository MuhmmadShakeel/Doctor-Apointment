import React from "react";

function PatientHomeHeader() {
  return (
    <div className="w-full bg-[#F8FAFC]">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] leading-tight">
            Book Trusted Doctors <br />
            <span className="text-[#2563EB]">
              Anytime, Anywhere
            </span>
          </h1>

          <p className="text-[#64748B] text-lg">
            Easily schedule appointments with certified doctors. 
            Get quality healthcare services from the comfort of your home.
          </p>

          <div className="flex gap-4">
            <button className="bg-[#2563EB] text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition duration-300">
              Book Appointment
            </button>

            <button className="border border-[#14B8A6] text-[#14B8A6] px-6 py-3 rounded-xl hover:bg-[#14B8A6] hover:text-white transition duration-300">
              View Doctors
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src={doctorImg}
            alt="Doctor"
            className="w-[400px] drop-shadow-xl"
          />
        </div>

      </div>
    </div>
  );
}

export default PatientHomeHeader;