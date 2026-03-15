import React from 'react';
import { NavLink } from 'react-router';
import ListLinks from '../../../Components/ShearComponent/ListLinks';

const Products = () => {
    return (
        <div className=''>
            <div className='container mx-auto px-24'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='text-4xl font-semibold'>Popular <span className='prcolor'>Products</span></h1>
                        <p>Shop online for new arrivals and get free shipping!</p>
                    </div>
                    <ListLinks/>
                </div>
                <div className='mt-10'>
                    Products
                </div>
            </div>
        </div>
    );
};

export default Products;