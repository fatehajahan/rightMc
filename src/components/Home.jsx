import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import WhyChooseUs from './WhyChooseUs'
import Offer from './Offer'
import Activities from './Activities'
import Analytics from './Analytics'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <WhyChooseUs />
            <Offer />
            <Activities />
            <Analytics />
        </div>
    )
}

export default Home