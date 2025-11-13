import React, { useState } from 'react';
import { FaCloud, FaMobileAlt, FaShieldAlt, FaChartBar, FaCogs } from 'react-icons/fa';

const MoreOffer = () => {
  const [showMore, setShowMore] = useState(false);
  const extraServices = [
    { id: 1, icon: FaCloud, title: 'Cloud Solutions & Migration', desc: 'Move your business to the cloud with scalable and cost-effective solutions.' },
    { id: 2, icon: FaChartBar, title: 'Data Analytics & BI', desc: 'Transform raw data into actionable insights for smarter decisions.' },
    { id: 3, icon: FaShieldAlt, title: 'Cybersecurity & Compliance', desc: 'Protect your business and ensure compliance with security standards.' },
    { id: 4, icon: FaMobileAlt, title: 'Mobile App Development', desc: 'Build Android and iOS apps that seamlessly integrate with your systems.' },
    { id: 5, icon: FaCogs, title: 'ERP & CRM Integration', desc: 'Optimize operations and customer management with modern ERP and CRM tools.' },
  ];

  return (
    <div className="max-w-[1320px] mx-auto px-6 py-16">
      <h3 className="text-3xl font-bold text-[#e21e28] mb-8 text-center">Additional Services</h3>

      <div className={`grid gap-8 md:grid-cols-3 transition-all duration-500 ${showMore ? 'max-h-full' : 'max-h-96 overflow-hidden'}`}>
        {extraServices.map(service => {
          const Icon = service.icon;
          return (
            <div key={service.id} className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
              <div className="text-4xl text-[#e21e28] mb-4"><Icon /></div>
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => setShowMore(!showMore)}
          className="px-6 py-3 bg-[#e21e28] text-white rounded-full font-medium hover:bg-red-700 transition"
        >
          {showMore ? 'See Less' : 'See More'}
        </button>
      </div>
    </div>
  );
};

export default MoreOffer;
