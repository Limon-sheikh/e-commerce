import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';

const RootLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <footer className=''>footer</footer>
        </div>
    );
};

export default RootLayout;