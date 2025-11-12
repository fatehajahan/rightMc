import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import footerLogo from '../assets/logo4.png'

const Footer = () => {
    const icons = [
        { icon: <FaFacebook />, name: "Facebook" },
        { icon: <FaLinkedin />, name: "LinkedIn" },
        { icon: <FaTwitter />, name: "Twitter" },
    ];

    return (
        <footer className="bg-black relative pt-[150px] pb-[50px] text-white">
            {/* Footer Content */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-start gap-10 relative z-10">
                {/* Left: Logo + Description + Social */}
                <div className="flex-1">
                    <img src={footerLogo} alt="Footer Logo" className='w-[200px] md:w-[300px] mb-4' />
                    <p className='text-[14px] md:text-[16px] leading-relaxed'>
                        We are pioneers in most of our efforts. So far, we developed software for major organizations across the country, including Bangladesh Post Office (BPO), Novartis (Bangladesh) Limited, Sanowara Group of Companies, Ahmadiyya Muslim Community, Islam Enterprise, ME Power Limited, Baker’s Bay.
                    </p>

                    <div className="flex items-center gap-x-4 mt-6">
                        {icons.map((item, idx) => (
                            <div key={idx} className="relative w-[45px] h-[45px] group cursor-pointer">
                                <div className="absolute inset-0 flex items-center justify-center text-[#e21e28] text-[28px] z-10">
                                    {item.icon}
                                </div>
                                <div className="absolute inset-0 bg-[#ffcc01] scale-0 group-hover:scale-100 transition-transform duration-300 origin-bottom-left rounded-full"></div>
                                <div className="absolute inset-0 flex items-center justify-center text-black text-[28px] group-hover:text-black z-20">
                                    {item.icon}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Contact Info */}
                <div className="flex-1">
                    <h3 className="text-[18px] md:text-[20px] font-semibold mb-4">Get In Touch</h3>
                    <p className="text-[14px] md:text-[16px] leading-relaxed">
                        Email: info@example.com <br />
                        Phone: +880 1234 567 890 <br />
                        Address: 123, Your Street, Dhaka, Bangladesh
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
