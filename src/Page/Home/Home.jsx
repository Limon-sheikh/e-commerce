import React from 'react';
import Hero from './HomeComponent/Hero';
import Category from './HomeComponent/Category';
import PopularProducts from './HomeComponent/PopularProducts';


const Home = () => {
    return (
        <div>
            <Hero/>
            <Category/>
            <PopularProducts/>
        </div>
    );
};

export default Home;