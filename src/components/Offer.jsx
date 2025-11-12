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
        <div>
            <div className="container flex flex-col lg:flex-row items-center gap-[30px] sm:gap-[40px] lg:gap-[50px] py-[60px] sm:py-[80px] lg:py-[100px] px-4">

                {/* Left Image */}
                <div data-aos="fade-right" className="flex-1 relative group overflow-hidden rounded-md w-full">
                    <img
                        src={offerPht}
                        alt="Choose Us"
                        className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 rounded-md"
                    />
                    {/* Corner Borders */}
                    <span className="absolute top-0 left-0 w-[60px] h-[60px] border-t-4 border-l-4 border-[#e21e28] rounded-tl-md"></span>
                    <span className="absolute top-0 right-0 w-[60px] h-[60px] border-t-4 border-r-4 border-[#e21e28] rounded-tr-md"></span>
                    <span className="absolute bottom-0 left-0 w-[60px] h-[60px] border-b-4 border-l-4 border-[#e21e28] rounded-bl-md"></span>
                    <span className="absolute bottom-0 right-0 w-[60px] h-[60px] border-b-4 border-r-4 border-[#e21e28] rounded-br-md"></span>
                </div>

                {/* Right Section */}
                <div data-aos="fade-left" className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <span className="md:inline-block hidden bg-[#e21e28] h-[3px] w-[50px] rounded-full"></span>
                        <h2 className="text-[18px] font-semibold tracking-wide uppercase">
                            What We Offer
                        </h2>
                    </div>

                    <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-bold leading-[1.2] pt-[20px] sm:pt-[25px] text-gray-900 max-w-full lg:max-w-[550px]">
                        We Deliver Smart and Scalable Solutions
                    </h2>

                    <p className="text-[15px] sm:text-[17px] text-gray-700 py-[20px] sm:py-[25px] leading-relaxed max-w-full lg:max-w-[550px]">
                        At Right Management Consultancy, we blend innovation with experience to deliver tailored software and IT solutions. From modern web applications to legacy system management, we empower your business with reliable technology.
                    </p>

                    <div className="flex flex-col w-full justify-center gap-6">
                        {data.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={index} className="flex md:flex-row flex-col justify-center md:items-start items-center gap-4 p-3 rounded-lg transition-all duration-500 group w-full">
                                    <div className="text-[#e21e28] text-3xl sm:text-4xl">
                                        <IconComponent />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-[#000] font-bold text-sm sm:text-base">{item.title}</p>
                                        <p className="font-semibold text-gray-600 text-sm sm:text-base">{item.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <button
                        className="relative overflow-hidden bg-[#e21e28] text-white font-semibold py-3 px-8 rounded-md group transition-all duration-500 cursor-pointer mt-[25px]"
                    >
                        <span className="absolute inset-0 bg-[#ffcc01] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
                        <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                            See More
                        </span>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Offer;
