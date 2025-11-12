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
            <div id="home">
                <Banner />
            </div>

            <div id="about">
                <WhyChooseUs />
            </div>

            <div id="services">
                <Offer />
                <Activities />
                <Analytics />
            </div>

            <div id="contact">
                <NeedConsultancy />
                <Footer />
            </div>
        </div>
    )
}

export default Home
