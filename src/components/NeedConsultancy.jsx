import React, { useEffect } from 'react'
// import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const NeedConsultancy = () => {
    useEffect(() => {
            AOS.init({
                duration: 1000,
                easing: "ease-in-out",
                once: false,
                mirror: false,
                offset: 120,
            });
        }, []);
    return (
        <div data-aos="fade-up" className="w-full flex justify-center pb-[100px]">
            <div className="w-[90%] md:w-[1000px] bg-[#ffcc01] rounded-lg p-6 md:p-10 shadow-lg">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
                    <span className="hidden md:block bg-[#e21e28] h-[3px] w-[50px] rounded-full"></span>
                    <h2 className="text-[18px] md:text-[20px] font-semibold tracking-wide uppercase text-center md:text-left">
                        Request Consultant
                    </h2>
                    <span className="hidden md:block bg-[#e21e28] h-[3px] w-[50px] rounded-full"></span>
                </div>
                <h2 className='text-[28px] md:text-[42px] font-bold text-center mb-4'>
                    “Need Consultancy? Let’s Build Your Next Solution Together.”
                </h2>
                <p className="text-[16px] md:text-[18px] font-semibold tracking-wide uppercase text-center mb-6">
                    Call Us Today!
                </p>
                <div className='flex justify-center'>
                    <button className="relative overflow-hidden bg-[#e21e28] text-white font-semibold py-3 px-8 rounded-md group transition-all duration-500 cursor-pointer">
                        <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
                        <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                            Call Now!
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NeedConsultancy
