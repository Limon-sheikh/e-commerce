import React from 'react';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <h1>navber</h1>
            <Outlet></Outlet>
            <footer>footer</footer>
        </div>
    );
};

export default RootLayout;