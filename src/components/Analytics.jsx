import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef, useState } from 'react';

const Analytics = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const hasCounted = useRef(false); // to prevent counting multiple times

    useEffect(() => {
        AOS.init({ duration: 1000 });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasCounted.current) {
                        hasCounted.current = true; // mark as counted
                        let start = 0;
                        const end = 100;
                        const duration = 2000; // 2 seconds
                        const stepTime = Math.floor(duration / end);

                        const timer = setInterval(() => {
                            start += 1;
                            setCount(start);
                            if (start === end) clearInterval(timer);
                        }, stepTime);
                    }
                });
            },
            { threshold: 0.5 } // trigger when 50% visible
        );

        if (countRef.current) observer.observe(countRef.current);

        return () => {
            if (countRef.current) observer.unobserve(countRef.current);
        };
    }, []);

    return (
        <div data-aos="fade-up" className='pb-[100px] px-4 md:px-0'>
            <div className="container mx-auto">
                <div className='flex flex-col md:flex-row md:justify-center gap-8 md:gap-x-12'>
                    <div className='bg-[#e21e28] flex flex-col md:flex-row items-center md:items-start justify-between md:w-[1000px] p-6 md:p-10 rounded-lg'>
                        <div className='mb-6 md:mb-0 text-center md:text-left'>
                            <p ref={countRef} className='text-5xl md:text-[65px] font-bold text-white'>{count}+</p>
                            <p className='text-lg md:text-xl font-semibold text-white'>Projects Delivered</p>
                        </div>
                        <div className='text-white max-w-full md:max-w-xl md:text-left text-center'>
                            <p className='text-lg md:text-2xl font-bold pb-3'>Right Management Consultancy — 100+ Projects Delivered</p>
                            <p className='text-sm md:text-base font-semibold'>
                                With over 100 successful projects completed across web, enterprise, and legacy systems, we combine deep technical expertise (PHP, Laravel, COBOL, Visual FoxPro, dBase III, JavaScript) with practical business insight to deliver reliable, scalable solutions that drive measurable results.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics


{/* <div className='bg-[#e21e28] w-[200px] h-[200px]'></div>
<div className='bg-[#e21e28] w-[200px] h-[200px]'></div>
<div className='bg-[#e21e28] w-[200px] h-[200px]'></div> */}