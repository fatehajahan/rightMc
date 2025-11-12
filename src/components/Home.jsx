import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import WhyChooseUs from './WhyChooseUs'
import Offer from './Offer'
import Activities from './Activities'
import Analytics from './Analytics'
import Footer from './Footer'
import NeedConsultancy from './NeedConsultancy'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <WhyChooseUs />
            <Offer />
            <Activities />
            <Analytics />
            <NeedConsultancy />
            <Footer />
        </div>
    )
}

export default Home