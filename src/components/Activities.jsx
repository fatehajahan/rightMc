import React from 'react'
import activity1 from '../assets/achievements/04.jpg'
import activity2 from '../assets/achievements/02.jpg'
import activity3 from '../assets/achievements/03.jpg'

const Activities = () => {
  const data = [
    {
      id: 1,
      image: activity1,
      title: 'Software Renewal Agreement',
      description:
        'Right Management Consultants has officially signed the Postal Life Insurance Software Renewal Agreement with the Bangladesh Post Office. This partnership reinforces our commitment to providing reliable, secure, and efficient software solutions that support the digital transformation of national postal services.',
      date: 'June 2, 2024',
    },
    {
      id: 2,
      image: activity2,
      title: 'Recognition of Excellence',
      description:
        'The honorable Director General of Bangladesh Post Office extended heartfelt congratulations to the CEO of Right Management Consultants for successfully developing a comprehensive digital system for the organization. This achievement marks a significant milestone in modernizing postal operations across Bangladesh.',
      date: 'May 27, 2024',
    },
    {
      id: 3,
      image: activity3,
      title: 'Resettlement Planning (EQMS)',
      description:
        'In collaboration with EQMS, we held a comprehensive meeting with the Water Development Board to discuss the implementation of the Resettlement Action Plan. The session emphasized strategic coordination, stakeholder engagement, and the development of a clear framework to ensure smooth and sustainable project execution.',
      date: 'May 5, 2024',
    },
  ]

  return (
    <div className="relative bg-gradient-to-br from-[#e21e20]/90 via-[#ffcc09]/80 to-[#e21e28]/90 shadow-xl overflow-hidden py-[100px] mb-[100px]">
      <div className="container">
        {/* Header Section */}
        <div className="text-center md:text-left mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <span className="hidden md:inline-block bg-[#ffcc01] h-[3px] w-[50px] rounded-full"></span>
              <h2 className="text-[18px] font-semibold tracking-wide uppercase text-white">
                Our Recent Activities
              </h2>
            </div>
            <h2 className="text-[36px] sm:text-[48px] font-bold leading-[1.2] pt-[25px] text-white">
              Latest Activities
            </h2>
          </div>
          <button className="relative overflow-hidden bg-[#e21e28] text-white font-semibold py-3 px-8 rounded-md group transition-all duration-500 cursor-pointer">
            <span className="absolute inset-0 bg-[#fff] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">
              Learn More
            </span>
          </button>
        </div>

        {/* Activities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-2xl rounded-md overflow-hidden hover:-translate-y-3 transition-transform duration-500 cursor-pointer"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[250px] object-cover"
                />
                <span className="absolute top-3 left-3 bg-green-500 text-white text-[12px] px-3 py-[2px] rounded-sm font-semibold">
                  News
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-[18px] font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
                  {item.description}
                </p>
                <p className="text-[#009e52] font-medium text-sm">
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Activities
