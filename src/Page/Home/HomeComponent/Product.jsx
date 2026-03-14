import React from 'react';
import { NavLink } from 'react-router';

const Product = () => {
    return (
        <div className=''>
            <div className='container mx-auto px-24'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='text-4xl font-semibold'>Popular <span className='prcolor'>Products</span></h1>
                        <p>Shop online for new arrivals and get free shipping!</p>
                    </div>
                    <div>
                        <ul className='flex gap-6 capitalize'>
                            <NavLink to='/' className={({isActive})=> isActive? "prcolor" : ""}>all</NavLink>
                            <NavLink to='' className={({isActive})=> isActive? "prcolor" : ""}>eggs</NavLink>
                            <NavLink to='' className={({isActive})=> isActive? "prcolor" : ""}>clothes</NavLink>
                            <NavLink to='' className={({isActive})=> isActive? "prcolor" : ""}>watches</NavLink>
                            <NavLink to='' className={({isActive})=> isActive? "prcolor" : ""}>dresses</NavLink>
                            <NavLink to='' className={({isActive})=> isActive? "prcolor" : ""}>glasses</NavLink>
                            <NavLink to='' className={({isActive})=> isActive? "prcolor" : ""}>cosmatics</NavLink>
                        </ul>
                    </div>
                </div>
                <div className='mt-10'>
                    Products
                </div>
            </div>
        </div>
    );
};

export default Product;