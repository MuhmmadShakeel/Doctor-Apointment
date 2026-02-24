import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Users, Award, Shield, Heart, CheckCircle, Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      image: "https://images.pexels.com/photos/532470/pexels-photo-532470.jpeg",
      specialty: "Cardiology"
    },
    {
      name: "Dr. Michael Chen",
      role: "Head of Technology",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      specialty: "Healthcare Tech"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Patient Care Director",
      image: "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
      specialty: "Internal Medicine"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We prioritize patient privacy and data security with enterprise-grade protection."
    },
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every decision we make puts patients first, ensuring the best possible healthcare experience."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in healthcare delivery and technological innovation."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building stronger healthcare communities through accessible and affordable services."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" data-aos="fade-down">
            About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">MediLink</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up">
            Revolutionizing healthcare through innovative technology, connecting patients with quality medical care
            and reliable transportation services.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                To bridge the gap between patients and healthcare providers through innovative digital solutions.
                We believe that quality healthcare should be accessible to everyone, regardless of location or circumstances.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our platform combines telemedicine, medical transportation, and medication delivery services
                to create a comprehensive healthcare ecosystem that serves the entire community.
              </p>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl flex items-center justify-center">
                <Heart className="w-24 h-24 text-blue-600 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-down">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do, ensuring we deliver exceptional healthcare services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <p className="text-blue-100">Happy Patients</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-blue-100">Expert Doctors</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-blue-100">Active Riders</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <p className="text-blue-100">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-down">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to advancing healthcare through technology and compassion.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.specialty}</p>
                <div className="flex justify-center mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Better Healthcare?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Join thousands of patients who trust MediLink for their healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/doctors"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Find a Doctor
            </Link>
            <Link
              to="/bookride"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200"
            >
              Book Ambulance
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;