import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
  return (
 
    <header className="navbar bg-sky-100 shadow-md">
        
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li className='text-xl hover:bg-sky-200 active:bg-sky-200'><NavLink to='/'>Topics</NavLink></li> 
      <li className='text-xl hover:bg-sky-200'><NavLink to='statistics'>Statistics</NavLink></li>
      <li className='text-xl hover:bg-sky-200'><NavLink to='blog'>Blogs</NavLink></li>
      </ul>
    </div>
  <div className="flex-1">
    <Link to='/' className="btn btn-ghost hover:bg-sky-200 normal-case text-2xl">Quiz-Factory</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0 ">
      <li className='text-xl hover:bg-sky-200 active:bg-sky-200'><NavLink to='/'>Topics</NavLink></li> 
      <li className='text-xl hover:bg-sky-200'><NavLink to='statistics'>Statistics</NavLink></li>
      <li className='text-xl hover:bg-sky-200'><NavLink to='blog'>Blogs</NavLink></li>
    </ul>
  </div>
</header>













//     <header className="navbar bg-sky-100 shadow-md">
//   <div className="navbar-start ">
//     <div className="dropdown">
//     <label tabIndex={0} className="btn btn-ghost lg:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//       </label>
//       <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
//       <li className='text-xl hover:bg-sky-200 active:bg-sky-200'><NavLink to='/'>Topics</NavLink></li> 
//         <li className='text-xl hover:bg-sky-200'><NavLink to='statistics'>Statistics</NavLink></li>
//         <li className='text-xl hover:bg-sky-200'><NavLink to='blog'>Blogs</NavLink></li>
//       </ul>
//     </div>

//   </div>
//   <div className="nav-end hidden lg:flex">
//     <ul className="menu menu-horizontal p-0">
   
//     </ul>
//   </div>
//   <div className='nav-end'>

//   </div>
// </header>
  );
};

export default Navbar;
