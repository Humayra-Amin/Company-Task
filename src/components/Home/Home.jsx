import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Chart from '../Chart/Chart';
import AllCompanies from '../AllCompanies/AllCompanies';
import Listing from '../Listing/Listing';
import Slider from '../Slider/Slider';
import Stories from '../Stories/Stories';
import About from '../About/About';
import PortfolioCompany from '../PortfolioCompany/PortfolioCompany';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className='bg-base-200'>
            <div className='container mx-auto my-5 w-10/12 lg:w-4/5'>
                <Navbar></Navbar>
                <Banner></Banner>
                <Chart></Chart>
                <AllCompanies></AllCompanies>
                <Listing></Listing>
                <Slider></Slider>
                <Stories></Stories>
                <About></About>
                <PortfolioCompany></PortfolioCompany>
            </div>
            <div>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;