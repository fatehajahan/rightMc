import React from 'react'
import { BiSupport } from "react-icons/bi";
import { AiOutlineSolution } from "react-icons/ai";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineSettings } from "react-icons/md";
import SplitText from "../SplitText";
import banner from '../assets/achievements/banner.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    const data = [
        { id: "01", title: "Passionate Team", icon: MdOutlineSettings },
        { id: "02", title: "Expert Advisors", icon: GrUserExpert },
        { id: "03", title: "Innovative Solutions", icon: AiOutlineSolution },
        { id: "04", title: "Trusted Support", icon: BiSupport },
    ];

    return (
        <div>
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden">
                {/* Banner Image */}
                <img
                    src={banner}
                    alt="Banner"
                    className="w-full h-full object-cover object-center"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>

                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8 md:py-0 py-[180px] md:mt-[60px]">
                    <h1 className='text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-[0_0_8px_rgba(0,0,0,0.8)] leading-snug'>HELLO!</h1>
                    <SplitText
                        text="Welcome to Right Management Consultants"
                        className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-[0_0_8px_rgba(0,0,0,0.8)] leading-snug"
                        delay={40}
                        duration={0.25}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />

                    <p className="text-gray-200 mt-3 sm:mt-4 text-xs sm:text-sm md:text-lg lg:text-xl max-w-[90%] sm:max-w-[600px] md:max-w-[700px] leading-relaxed">
                        Empowering your business with expert solutions and strategic insights. <span className='font-bold'>Pioneer software developer in Bangladesh Post Office since 2007.</span> 
                    </p>

                    <button className='mt-[20px] cursor-pointer relative text-white font-medium py-[10px] group md:text-[20px] text-[12px]'>
                        <Link to="/learn-more-about-us">
                            Learn More about us
                        </Link>
                        <span className='absolute left-0 top-0 w-full h-[2px] bg-[#ffcc01] scale-x-[0.1] transition-transform group-hover:scale-x-100 origin-left duration-500'></span>

                        <span className='absolute right-0 bottom-0 w-full h-[2px] bg-[#ffcc01] scale-x-[0.1] transition-transform group-hover:scale-x-100 origin-right duration-500'></span>
                    </button>
                </div>
            </div>

            <div className="bg-[#e21e28] w-full z-50 hidden lg:block">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="flex flex-wrap justify-center gap-x-[50px] gap-y-6 py-6">
                        {data.map((item, index) => {
                            const IconComponent = item.icon; // dynamically select icon
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 group cursor-pointer"
                                >
                                    {/* Icon */}
                                    <IconComponent className="text-[30px] sm:text-[35px] md:text-[40px] text-white " />

                                    {/* Text that scales in on hover */}
                                    <div className="flex gap-1 sm:gap-2">
                                        <p className="text-[#ffcc01] font-bold text-sm sm:text-base md:text-lg">{item.id}</p>
                                        <p className="font-bold text-sm sm:text-base md:text-lg text-white">{item.title}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
