import React, { useState } from 'react';
import { FaCode, FaMobileAlt, FaShieldAlt, FaRegFileCode, FaCogs } from 'react-icons/fa';
import { FaCodeMerge } from "react-icons/fa6";
import { TbSettingsAutomation } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { Link } from 'react-router-dom';
import bannerImage from '../assets/service.jpg';

const MoreOffer = () => {
  const [showMore, setShowMore] = useState(false);
  const extraServices = [
    { id: 1, icon: FaCode, title: 'Software Design & Architecture', desc: 'We craft scalable and efficient software architectures tailored to each client’s operational needs. Our design approach ensures system flexibility, strong performance, and seamless user experiences across all platforms.' },
    { id: 2, icon: FaRegFileCode, title: 'Software Development', desc: 'From concept to completion, we deliver secure and high-performing software using technologies like PHP, Laravel, COBOL, Visual FoxPro, dBase III, and JavaScript. Every solution is built to meet unique business goals and industry standards.' },
    { id: 3, icon: FaCodeMerge, title: 'Deployment & Implementation', desc: 'Our experts handle the complete deployment process — from installation and configuration to integration and performance tuning. We ensure your systems go live smoothly, with minimal downtime and maximum efficiency.' },
    { id: 4, icon: TbSettingsAutomation, title: 'Process Automation Solutions', desc: 'We develop intelligent automation tools to streamline repetitive business processes, boost productivity, and reduce operational costs. Our quick prototyping services help organizations visualize and test automation workflows before full-scale implementation.' },
    { id: 5, icon: BiSupport, title: 'Maintenance & Support', desc: 'We provide ongoing maintenance, technical support, and system enhancements to ensure your software remains secure, updated, and optimized for performance at all times.' },
  ];

  return (
    <div className="">
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mb-[100px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bannerImage})` }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#e21e28]/80 via-[#ffcc01]/60 to-[#e21e28]/80"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
            Efficient & Reliable Managed Software Services
          </h1>
          <p className="text-white text-lg md:text-xl lg:text-2xl max-w-3xl drop-shadow-md">
            Right Management Consultants delivers secure software development, deployment, and maintenance services tailored for your business needs.
          </p>
          <a
            href="https://wa.me/8801234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-gradient-to-r from-[#e21e28] to-[#ffcc01] text-white font-semibold py-3 px-8 rounded-md shadow-lg hover:scale-105 transform transition-all duration-500"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>



      <div className='container'>
        <h3 className="text-2xl font-bold text-[#e21e28] mb-8">Efficient and Secure Managed IT Services for Businesses</h3>
        <p className='pb-[70px]'>
          At Right Management Consultants, our Managed Software Services allow businesses to outsource the management of their software systems to our expert team. As your dedicated managed services provider, we handle the ongoing monitoring, maintenance, support, and deployment of your software. Our proactive approach ensures minimal downtime, prevents potential issues, and keeps your software running efficiently and securely. <br /> <br /> Our goal is to provide businesses with a reliable and cost-effective way to manage their software systems, allowing you to focus on your core operations while we take care of development, updates, and maintenance. Below are some essential services included in our comprehensive Managed Software Services, customized to meet your business needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {extraServices.map(service => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="bg-white shadow-2xl rounded-md overflow-hidden hover:-translate-y-3 transition-transform duration-500 cursor-pointer py-[50px] px-[50px]">
                <div className="text-4xl text-[#e21e28] mb-4"><Icon /></div>
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <button
            className="relative overflow-hidden bg-[#e21e28] text-white font-semibold py-3 px-8 rounded-md group transition-all duration-500 cursor-pointer my-[25px]"
          >
            <span className="absolute inset-0 bg-[#ffcc01] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">
              <Link to="/">
                Back to HomePage
              </Link>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreOffer;
