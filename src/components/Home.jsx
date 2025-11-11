import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import WhyChooseUs from './WhyChooseUs'
import Offer from './Offer'
import Activities from './Activities'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <WhyChooseUs />
            <Offer />
            <Activities />
        </div>
    )
}

export default Home