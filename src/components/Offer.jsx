import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import offerPht from "../assets/offer.png";
import { TbWorld } from "react-icons/tb";
import { MdComputer } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";

const Offer = () => {
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
        { id: "01", title: "Custom Software Development", icon: MdComputer, description: "We develop customized software solutions using PHP, Laravel, COBOL, Visual FoxPro, dBase III, and JavaScript — designed to meet your business needs and enhance operational efficiency." },
        { id: "02", title: "Web Application Development", icon: TbWorld, description: "Our team builds secure and responsive web applications that combine modern frameworks with powerful backend systems to ensure seamless performance and user experience." },
        { id: "03", title: "Legacy System Modernization", icon: IoIosSettings, description: "We specialize in maintaining, upgrading, and integrating legacy platforms like COBOL, Visual FoxPro, and dBase III, ensuring they remain efficient, compatible, and aligned with today’s business demands." },
        { id: "04", title: "IT Consultancy & Support", icon: MdSupportAgent, description: "Our experienced consultants provide expert guidance to optimize your IT infrastructure, streamline processes, and help you make strategic technology decisions for sustainable growth." },
    ]

    return (
        <div className='bg-gradient-to-br from-[#e21e20]/90 via-[#ffcc09]/80 to-[#e21e8]/90 shadow-xl overflow-hidden'>
            <div className='container flex items-center lg:flex-row gap-[50px] py-[100px] '>
                {/* Left Image Section */}
                <div
                    data-aos="fade-right"
                    className="flex-1 relative group overflow-hidden rounded-md"
                >
                    <img
                        src={offerPht}
                        alt="Choose Us"
                        className="w-full h-[600px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
                    {/* Top-left corner */}
                    <span className="absolute top-0 left-0 w-[60px] h-[60px] border-t-4 border-l-4 border-[#e21e28] rounded-tl-md"></span>

                    {/* Top-right corner */}
                    <span className="absolute top-0 right-0 w-[60px] h-[60px] border-t-4 border-r-4 border-[#e21e28] rounded-tr-md"></span>

                    {/* Bottom-left corner */}
                    <span className="absolute bottom-0 left-0 w-[60px] h-[60px] border-b-4 border-l-4 border-[#e21e28] rounded-bl-md"></span>

                    {/* Bottom-right corner */}
                    <span className="absolute bottom-0 right-0 w-[60px] h-[60px] border-b-4 border-r-4 border-[#e21e28] rounded-br-md"></span>
                </div>

                {/* Right Text + Offers Section */}
                <div
                    data-aos="fade-left"
                    className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
                >
                    {/* Section Title */}
                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <span className="inline-block bg-[#e21e28] h-[3px] w-[50px] rounded-full"></span>
                        <h2 className="text-[24px] sm:text-[28px] font-semibold tracking-wide uppercase">
                            What We Offer
                        </h2>
                    </div>

                    {/* Heading */}
                    <h2 className="text-[36px] sm:text-[48px] font-bold leading-[1.2] pt-[25px] text-gray-900 max-w-[550px]">
                        We Deliver Smart and Scalable Solutions
                    </h2>

                    {/* Paragraph */}
                    <p className="text-[16px] sm:text-[18px] text-gray-600 py-[25px] leading-relaxed max-w-[550px]">
                        At Right Management Consultancy, we blend innovation with experience to deliver tailored software and IT solutions. From modern web applications to legacy system management, we empower your business with reliable technology.
                    </p>

                    {/* Offer Items */}
                    <div className="flex flex-col w-full justify-center gap-6">
                        {data.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-4 rounded-lg transition-all duration-500 group w-full"
                                >
                                    <div className="text-[#e21e28] text-4xl sm:text-5xl">
                                        <IconComponent />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-[#000] font-bold text-sm sm:text-base">{item.title}</p>
                                        <p className="font-semibold text-gray-600 text-sm sm:text-base">{item.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <button className='mt-[20px] cursor-pointer relative text-[#000] font-medium py-[10px] group mx-auto'>
                        Learn More about us
                        <span className='absolute left-0 top-0 w-full h-[2px] bg-[#e21e28] scale-x-[0.1] transition-transform group-hover:scale-x-100 origin-left duration-500'></span>

                        <span className='absolute right-0 bottom-0 w-full h-[2px] bg-[#e21e28] scale-x-[0.1] transition-transform group-hover:scale-x-100 origin-right duration-500'></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Offer;
