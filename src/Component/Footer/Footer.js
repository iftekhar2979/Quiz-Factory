import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="px-4 py-8 bg-sky-100 shadow text-gray-900">
        <div className="container flex flex-wrap items-center justify-center text-gray-900 mx-auto space-y-4 sm:justify-between sm:space-y-0">
            <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                <div className="flex items-center justify-center flex-shrink-0 w-auto h-12 rounded-full ">
                    <h2 className='text-xl font-bold'>Quiz-Factory</h2>
                </div>
                <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                    <li>
                        <Link to='/'>Terms and Condition</Link>
                    </li>
                    <li>
                        <Link to='/'>Privacy</Link>
                    </li>
                </ul>
            </div>
            <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                <li>
                    <Link to='/'>Instagram</Link>
                </li>
                <li>
                    <Link to='/'>Facebook</Link>
                </li>
                <li>
                    <Link to='/'>Twitter</Link>
                </li>
            </ul>
        </div>
    </footer>
         
    );
};

export default Footer;