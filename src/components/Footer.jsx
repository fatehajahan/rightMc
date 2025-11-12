import React from 'react'
import { IoMdMail, IoIosCall } from "react-icons/io";
import { FaMapMarkedAlt, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import footerLogo from '../assets/logo4.png'

const Footer = () => {
    const icons = [
        { icon: <FaFacebook />, name: "Facebook" },
        { icon: <FaLinkedin />, name: "LinkedIn" },
        { icon: <FaTwitter />, name: "Twitter" },
    ];

    return (
        <footer className="bg-[#000] py-[100px]">
            <div className="container mx-auto px-4 overflow-x-hidden">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-0">

                    {/* Left Section: Logo + Description + Social */}
                    <div className="text-white">
                        <img src={footerLogo} alt="Logo" className='w-[300px] max-w-full mb-4' />
                        <p className='w-[600px] max-w-full text-sm sm:text-base leading-relaxed mb-6'>
                            We are pioneers in most of our efforts. Our software speaks about us, and we have served some of the biggest and most successful organizations across the country, including Bangladesh Post Office (BPO), Novartis (Bangladesh) Limited, Sanowara Group of Companies, Ahmadiyya Muslim Community, Islam Enterprise, ME Power Limited, Baker’s Bay.
                        </p>

                        <div className="flex items-center gap-4 cursor-pointer">
                            {icons.map((item, idx) => (
                                <div key={idx} className="relative w-[45px] h-[45px] group">
                                    <div className="absolute inset-0 flex items-center justify-center text-[#e21e28] text-[28px] sm:text-[32px] md:text-[36px] z-10">
                                        {item.icon}
                                    </div>
                                    <div className="absolute inset-0 bg-[#ffcc01] scale-0 group-hover:scale-100 transition-transform duration-300 origin-bottom-left rounded-full"></div>
                                    <div className="absolute inset-0 flex items-center justify-center text-[#5a5a5a] text-[28px] sm:text-[32px] md:text-[36px] group-hover:text-[#5a5a5a] z-20">
                                        {item.icon}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Section: Contact Info */}
                    <div className="text-white">
                        <div className="flex items-center justify-center md:justify-start gap-2 md:gap-4 mb-4">
                            <span className="bg-[#e21e28] h-[3px] w-[50px] rounded-full"></span>
                            <h2 className="text-[18px] sm:text-[20px] font-semibold tracking-wide uppercase">
                                Get In Touch
                            </h2>
                            <span className="bg-[#e21e28] h-[3px] w-[50px] rounded-full"></span>
                        </div>

                        <p className='w-[450px] max-w-full text-sm sm:text-base mb-6'>
                            Right Management Consultants deliver innovative software solutions and expert consulting services to help businesses achieve their goals efficiently. Get in touch via email, phone, or social media.
                        </p>

                        <div className="flex flex-col gap-3">
                            <div className='flex items-center gap-3'>
                                <FaMapMarkedAlt className='text-[25px]' />
                                <p>351/B Khilgaon Taltola, Dhaka-1219</p>
                            </div>

                            <div className='flex items-center gap-3'>
                                <IoMdMail className='text-[25px]' />
                                <p>fatehajahan.dev@gmail.com</p>
                            </div>

                            <div className='flex items-center gap-3'>
                                <IoIosCall className='text-[25px]' />
                                <p>+880 1720-340030</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer
