import React from 'react';
import Hero from './HomeComponent/Hero';
import Category from './HomeComponent/Category';
import Product from './HomeComponent/Product';


const Home = () => {
    return (
        <div>
            <Hero/>
            <Category/>
            <Product/>
        </div>
    );
};

export default Home;