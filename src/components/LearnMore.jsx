import React from "react";
import aboutUs from '../assets/achievements/02.jpg'
import { Link } from "react-router-dom";

const LearnMore = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-about bg-cover bg-center bg-no-repeat"></div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-2xl md:text-6xl font-bold mb-5 drop-shadow-lg tracking-tight">
            Explore Us
          </h1>
          <p className="text-gray-200 text-[15px] md:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover how <span className="text-[#ffcc09] font-semibold">Right Management Consultants</span>  {" "}
            delivers innovative IT and software solutions — helping businesses
            modernize and grow efficiently.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto py-[100px] px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-14 items-center text-center">
          {/* Left Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#e21e28] leading-tight">
              About Right Management Consultants
            </h2>

            <p className="text-gray-700 leading-relaxed mb-5 text-[17px]">
              <span className="font-semibold text-[#e21e28]">Right Management Consultants</span>
              {" "}is a trusted technology partner with a proven history of delivering
              <span className="font-semibold text-[#e21e28]"> 100+ successful projects</span>
              worldwide. We specialize in transforming business challenges into scalable digital
              solutions with precision, reliability, and innovation.
            </p>

            <p className="text-gray-700 leading-relaxed mb-5 text-[17px]">
              Our expert team works across diverse technologies such as{" "}
              <span className="font-medium text-gray-900">
                PHP, Laravel, COBOL, Visual FoxPro, dBase III, and JavaScript
              </span>
              , offering complete development, modernization, and integration services
              tailored to your organization’s goals.
            </p>

            <p className="text-gray-700 leading-relaxed text-[17px]">
              At <span className="font-semibold text-[#e21e28]">Right Management Consultants</span>,
              we prioritize trust, transparency, and performance. Through collaboration and
              cutting-edge expertise, we empower businesses to thrive in the ever-evolving
              digital landscape.
            </p>

            <button className="relative mt-10 overflow-hidden bg-[#e21e28] text-white font-semibold py-3 px-10 rounded-md group transition-all duration-500 shadow-md hover:shadow-xl">
              <span className="absolute inset-0 bg-[#ffcc01] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
              <span className="relative z-10 group-hover:text-black transition-colors duration-500 cursor-pointer">
                Contact Us
              </span>
            </button>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full md:w-[90%] rounded-2xl overflow-hidden shadow-lg group">
              <img
                src={aboutUs}
                alt="Team collaboration"
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-80"></div>
            </div>
          </div>
        </div>
      </section>

      {/* mission */}
      <section className="bg-gray-50 py-[100px] px-6 md:px-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#e21e28] mb-6">
            Our Mission
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
            At <span className="font-semibold text-[#e21e28]">Right Management Consultants</span>,
            our mission is to empower organizations through innovative, reliable,
            and result-driven software and IT solutions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#e21e28] mb-3">💡 Innovation</h3>
              <p className="text-gray-700 leading-relaxed">
                We continuously adopt modern technologies and creative strategies
                to deliver forward-thinking digital solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#e21e28] mb-3">🤝 Client Success</h3>
              <p className="text-gray-700 leading-relaxed">
                Every project we build focuses on our clients’ growth, satisfaction,
                and long-term business success.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#e21e28] mb-3">⚙️ Reliability</h3>
              <p className="text-gray-700 leading-relaxed">
                We prioritize stability and performance, ensuring each solution runs
                efficiently and securely for years to come.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#e21e28] mb-3">🌍 Digital Transformation</h3>
              <p className="text-gray-700 leading-relaxed">
                Helping businesses modernize legacy systems and embrace next-generation
                digital workflows for sustainable growth.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#e21e28] mb-3">🧠 Expertise</h3>
              <p className="text-gray-700 leading-relaxed">
                Our skilled professionals bring deep domain knowledge and years of
                experience to every project we undertake.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#e21e28] mb-3">🔒 Integrity</h3>
              <p className="text-gray-700 leading-relaxed">
                We operate with honesty, transparency, and accountability in all
                our relationships and commitments.
              </p>
            </div>
          </div>

          {/* Button */}
          <button
            className="relative overflow-hidden bg-[#e21e28] text-white font-semibold py-3 px-8 rounded-md group transition-all duration-500 cursor-pointer my-[50px]"
          >
            <span className="absolute inset-0 bg-[#ffcc01] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">
              <Link to="/">
                Back to HomePage
              </Link>
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default LearnMore;
