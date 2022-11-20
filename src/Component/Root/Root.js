import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

export const topicsContext=createContext([])
const Root = () => {
    const topics=useLoaderData()
    // console.log(topics);
    return (
        <topicsContext.Provider value={topics}>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </topicsContext.Provider>
        
    );
};

export default Root;