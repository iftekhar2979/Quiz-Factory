import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export const topicsContext=createContext([])
const Root = () => {
    const topics=useLoaderData()
    return (
        <topicsContext.Provider value={topics}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </topicsContext.Provider>
        
    );
};

export default Root;