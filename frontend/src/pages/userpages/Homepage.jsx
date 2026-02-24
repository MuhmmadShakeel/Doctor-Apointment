import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PatientHomeHeader from '../../components/patientcomponents/patienthome/patienthomeheader'

function Homepage() {
  useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])

  return (
    <div>
      <PatientHomeHeader/>
      {/* Features Section */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose MediLink?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Booking</h3>
              <p className="text-gray-600">Schedule appointments with top doctors in just a few clicks.</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Service</h3>
              <p className="text-gray-600">Quick medical deliveries and emergency transport services.</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted Care</h3>
              <p className="text-gray-600">Verified doctors and professional healthcare services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <p className="text-gray-600">Happy Patients</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
              <p className="text-gray-600">Expert Doctors</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <p className="text-gray-600">Active Riders</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <div className="text-4xl font-bold text-yellow-600 mb-2">5000+</div>
              <p className="text-gray-600">Successful Rides</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-8">Join thousands of patients who trust MediLink for their healthcare needs.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Sign Up Now
          </button>
        </div>
      </section>
    </div>
  )
}

export default Homepage
