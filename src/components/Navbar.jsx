import React, { useState } from 'react'
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import logoDesktop from '../assets/logo4.png'
import logoMobile from '../assets/mobileLogo.png'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState('Home')

    return (
        <div className="relative w-full z-50">
            {/* Color bars (Full Width) */}
            <div className="bg-[#ffcc01] w-full h-[25px] sm:h-[30px]"></div>
            <div className="bg-[#e21e28] w-full h-[50px] sm:h-[50px]"></div>

            {/* Navbar container (with centered layout) */}
            <div className="absolute top-[5px] left-0 w-full">
                <div className="max-w-[1320px] mx-auto flex justify-between px-6 sm:px-10 py-7.5 relative">
                    <div className='relative'>
                        {/* Logo for desktop */}
                        <img
                            src={logoDesktop}
                            alt="Logo"
                            className="hidden sm:block w-[350px] object-contain"
                        />
                        {/* Logo for Mobile */}
                        <img
                            src={logoMobile}
                            alt="Logo"
                            className="block sm:hidden w-[130px] object-contain"
                        />
                    </div>

                    {/* Hamburger Menu Icon */}
                    <button onClick={() => setOpen(!open)} className="text-3xl text-white z-50 relative block md:hidden">
                        {open ? <MdOutlineClose className='text-[40px] absolute top-[-5px] right-[10px] text-black' /> : <MdOutlineMenu className='text-[40px] absolute top-[-5px] right-[10px] text-white' />}
                    </button>

                    {/* Sliding Mobile Menu */}
                    <div
                        className={`fixed top-0 right-0 h-full bg-white shadow-lg w-64 transition-transform duration-500 z-40 md:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`}
                    >
                        <ul className="flex flex-col p-6 pt-24 text-gray-700 font-medium space-y-6">
                            {['Home', 'About', 'Services', 'Contact'].map((item) => (
                                <li
                                    key={item}
                                    className={`transition duration-300 cursor-pointer ${active === item ? 'text-[#e21e28]' : 'hover:text-[#e21e28]'}`}
                                    onClick={() => {
                                        setActive(item)
                                        setOpen(false)
                                    }}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-10 text-[18px] font-semibold absolute right-0 top-[40px] text-white">
                        {['Home', 'About', 'Services', 'Contact'].map((item) => (
                            <li
                                key={item}
                                onClick={() => setActive(item)}
                                className="relative cursor-pointer group transition duration-300"
                            >
                                <span
                                    className={`relative ${active === item
                                        ? 'text-[#ffcc01] drop-shadow-[0_0_6px_red]'
                                        : 'text-white group-hover:text-[#ffcc01] group-hover:drop-shadow-[0_0_6px_red]'
                                        }`}
                                >
                                    {item}
                                </span>

                                {/* Underline */}
                                <span
                                    className={`absolute left-0 bottom-0 h-[2px] bg-[#ffcc01] transition-all duration-500 ${active === item ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}
                                ></span>
                            </li>
                        ))}
                    </ul>

                </div>

                {/* Mobile Menu */}

            </div>
        </div>
    )
}

export default Navbar
