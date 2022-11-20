import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
   
    <header className="navbar bg-sky-100 shadow-md">
  <div className="flex-1">
    <a className="btn btn-ghost hover:bg-sky-200 normal-case text-2xl">Quiz-Factory</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li className='text-xl hover:bg-sky-200 active:bg-sky-200'><NavLink to='/'>Topics</NavLink></li> 
      <li className='text-xl hover:bg-sky-200'><NavLink to='/statictics'>Statictics</NavLink></li>
      <li className='text-xl hover:bg-sky-200'><NavLink to='/blog'>Blogs</NavLink></li>
    </ul>
  </div>
</header>
  );
};

export default Navbar;
