import React, { useState, useEffect } from 'react'
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import logoDesktop from '../assets/logo4.png'
import logoMobile from '../assets/mobileLogo.png'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState('Home')
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div
            className="w-full z-50 fixed top-0 left-0 transition-all duration-500 "
        >
            {/* Color bars */}
            <div className="bg-[#ffcc01] w-full h-[25px] sm:h-[30px]"></div>
            <div className="bg-[#e21e28] w-full h-[50px] sm:h-[50px]"></div>

            {/* Navbar container */}
            <div className="absolute top-[5px] left-0 w-full">
                <div className="md:max-w-[1320px] mx-auto flex justify-between px-6 sm:px-10 py-7.5 relative">
                    {/* Logo */}
                    <div className='relative'>
                        <img
                            src={logoDesktop}
                            alt="Logo"
                            className="hidden sm:block w-[350px] object-contain"
                        />
                        <img
                            src={logoMobile}
                            alt="Logo"
                            className="block sm:hidden w-[130px] object-contain"
                        />
                    </div>

                    {/* Hamburger Icon */}
                    <button onClick={() => setOpen(!open)} className="text-3xl text-white z-50 relative block md:hidden">
                        {open ? (
                            <MdOutlineClose className='text-[40px] absolute top-[-5px] right-[10px] text-black' />
                        ) : (
                            <MdOutlineMenu className='text-[40px] absolute top-[-5px] right-[10px] text-white' />
                        )}
                    </button>

                    {/* Mobile Menu */}
                    {/* Mobile Menu with Overlay */}
                    {open && (
                        <div
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
                            onClick={() => setOpen(false)} // closes when clicking outside
                        ></div>
                    )}

                    <div
                        className={`fixed top-0 right-0 h-full bg-white shadow-lg w-64 transition-transform duration-500 z-40 md:hidden ${open ? 'translate-x-0' : 'translate-x-full'
                            }`}
                        onClick={(e) => e.stopPropagation()} // stops closing when clicking inside
                    >
                        <ul className="flex flex-col p-6 pt-24 text-gray-700 font-medium space-y-6">
                            {['Home', 'About', 'Services', 'Contact'].map((item) => (
                                <li
                                    key={item}
                                    className={`transition duration-300 cursor-pointer ${active === item ? 'text-[#e21e28]' : 'hover:text-[#e21e28]'
                                        }`}
                                    onClick={() => {
                                        setActive(item)
                                        setOpen(false)
                                        const section = document.getElementById(item.toLowerCase())
                                        if (section) section.scrollIntoView({ behavior: 'smooth' })
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
                                onClick={() => {
                                    setActive(item)
                                    const section = document.getElementById(item.toLowerCase())
                                    if (section) section.scrollIntoView({ behavior: 'smooth' })
                                }}
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
            </div>
        </div>
    )
}

export default Navbar
