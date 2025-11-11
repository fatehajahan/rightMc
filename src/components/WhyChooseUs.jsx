import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import choosePht from "../assets/whyChooseUs.jpeg";

const WhyChooseUs = () => {
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
        <div className="max-w-[1320px] mx-auto py-[80px] px-4 md:px-8 flex flex-col lg:flex-row items-center gap-[60px] lg:gap-[80px]">

            {/* Left Text Section */}
            <div
                data-aos="fade-right"
                className="text-center md:text-left flex flex-col items-center md:items-start"
            >
                {/* Section Title */}
                <div className="flex items-center justify-center md:justify-start gap-4">
                    <span className="inline-block bg-[#e21e28] h-[3px] w-[50px] rounded-full"></span>
                    <h2 className="text-[24px] sm:text-[28px] font-semibold tracking-wide uppercase">
                        Why Choose Us
                    </h2>
                </div>

                {/* Heading */}
                <h2 className="text-[36px] sm:text-[48px] font-bold leading-[1.2] pt-[25px] text-gray-900 max-w-[550px]">
                    We Develop Software Solutions
                </h2>

                {/* Paragraph */}
                <p className="text-[16px] sm:text-[18px] text-gray-600 py-[25px] leading-relaxed max-w-[550px]">
                    that increase productivity, save time, and empower people. We build
                    software solutions with user satisfaction at the core — involving our
                    clients at every step to ensure passion, innovation, and purpose in
                    every project we create.
                </p>

                {/* Button */}
                <button
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="relative overflow-hidden bg-[#e21e28] text-white font-semibold py-3 px-8 rounded-md group transition-all duration-500 cursor-pointer"
                >
                    <span className="absolute inset-0 bg-[#ffcc01] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
                    <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                        Learn More
                    </span>
                </button>
            </div>


            {/* Right Image Section */}
            <div
                data-aos="fade-left"
                className="flex-1 relative group overflow-hidden rounded-md shadow-lg"
            >
                {/* Image */}
                <img
                    src={choosePht}
                    alt="Choose Us"
                    className="w-full h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />

                {/* Animated Border */}
                <span className="absolute inset-0 border-2 border-[#e21e28] rounded-md scale-x-[0.2] scale-y-[0.2] opacity-60 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 ease-in-out pointer-events-none"></span>

                {/* Red Shadow Glow */}
                <span className="absolute inset-0 rounded-md shadow-[0_0_35px_rgba(226,30,40,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none"></span>
            </div>
        </div>
    );
};

export default WhyChooseUs;
