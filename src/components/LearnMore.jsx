import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutUs from '../assets/achievements/02.jpg'
import { Link } from "react-router-dom";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaHandshake, FaBrain } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { FaLock } from "react-icons/fa";

const LearnMore = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false,
      offset: 120,
    });
  }, []);

  const data = [
    {
      id: 1,
      title: "Innovation",
      desc: "We continuously adopt modern technologies and creative strategies to deliver forward-thinking digital solutions.",
      icon: HiOutlineLightBulb,
    },
    {
      id: 2,
      title: "Client Success",
      desc: "Every project we build focuses on our clients’ growth, satisfaction, and long-term business success.",
      icon: FaHandshake,
    },
    {
      id: 3,
      title: "Reliability",
      desc: "We prioritize stability and performance, ensuring each solution runs efficiently and securely for years to come.",
      icon: IoSettings,
    },
    {
      id: 4,
      title: "Digital Transformation",
      desc: "Helping businesses modernize legacy systems and embrace next-generation digital workflows for sustainable growth.",
      icon: BiWorld,
    },
    {
      id: 5,
      title: "Expertise",
      desc: "Our skilled professionals bring deep knowledge and years of experience; from DOS/UNIX environment to modern web environment.",
      icon: FaBrain,
    },
    {
      id: 6,
      title: "Integrity",
      desc: "We operate with honesty, transparency, and accountability in all our relationships and commitments.",
      icon: FaLock,
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-about bg-cover bg-center bg-no-repeat"></div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>

        {/* Hero Content */}
        <div data-aos="fade-up" className="relative z-10 text-center px-6">
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
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#e21e28] leading-tight">
              About Right Management Consultants
            </h2>

            <div className="md:text-left text-center">
              <p className="text-gray-700 leading-relaxed mb-5 text-[17px]">
                <span className="font-semibold text-[#e21e28]">Right Management Consultants</span>
                {" "}is a trusted technology partner with a proven history of delivering
                <span className="font-semibold text-[#e21e28]"> 100+ successful projects</span> {" "}
                worldwide. We specialize in transforming business challenges into scalable digital
                solutions with precision, reliability, and always try to keep in mind time, place & situation.
              </p>

              <p className="text-gray-700 leading-relaxed mb-5 text-[17px]">
                Our expert team works across diverse technologies such as{" "}
                <span className="font-medium text-gray-900">
                  PHP, Laravel, COBOL, Visual FoxPro, dBase III, JavaScript and we are always interested to learn new technology. {" "}
                </span>
                We offer complete development, modernization, and integration services
                tailored to your organization’s vision.
              </p>

              <p className="text-gray-700 leading-relaxed text-[17px]">
                At <span className="font-semibold text-[#e21e28]">Right Management Consultants</span>,
                we prioritize trust, transparency, and performance. Through collaboration and
                cutting-edge expertise, we empower businesses to thrive in the ever-evolving
                digital eco-system.
              </p>
            </div>

            <button className="relative mt-10 overflow-hidden bg-[#e21e28] text-white font-semibold py-3 px-10 rounded-md group transition-all duration-500 shadow-md hover:shadow-xl">
              <span className="absolute inset-0 bg-[#ffcc01] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
              <span className="relative z-10 group-hover:text-black transition-colors duration-500 cursor-pointer">
                Contact Us
              </span>
            </button>
          </div>

          {/* Right Side Image */}
          <div data-aos="fade-left" className="flex justify-center md:justify-end">
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
      <section className="bg-gray-50 py-[100px] px-6 md:px-[100px]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#e21e28] mb-6">
            Our Mission
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
            At{" "}
            <span className="font-semibold text-[#e21e28]">
              Right Management Consultants
            </span>
            , our mission is to empower organizations through innovative, reliable,
            and result-oriented software and relevent solutions.
          </p>

          {/* Mission Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {data.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-[#e21e28] mb-3">
                    <Icon className="text-4xl" /> {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Button */}
          <button className="relative overflow-hidden bg-[#e21e28] text-white font-semibold py-3 px-8 rounded-md group transition-all duration-500 cursor-pointer my-[50px]">
            <span className="absolute inset-0 bg-[#ffcc01] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">
              <Link to="/">Back to HomePage</Link>
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default LearnMore;
