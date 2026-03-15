import React from 'react';
import Hero from './HomeComponent/Hero';
import Category from './HomeComponent/Category';
import Products from './HomeComponent/Products';


const Home = () => {
    return (
        <div>
            <Hero/>
            <Category/>
            <Products/>
        </div>
    );
};

export default Home;