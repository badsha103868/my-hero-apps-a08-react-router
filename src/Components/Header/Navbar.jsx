import React from 'react';
import { NavLink } from 'react-router';
import './Navbar.css'
import logoImg from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  
    const navLinks = <> 
    <NavLink to='/' className={({isActive})=> isActive? "nav-link active": "nav-link"}><li >Home</li></NavLink>

    <NavLink to='/apps'  className={({isActive})=> isActive? "nav-link active": "nav-link"}><li>Apps</li></NavLink>
   
    <NavLink to='/installation' className={({isActive})=> isActive? "nav-link active": "nav-link"}><li >Installation</li></NavLink>
 
  </>
  return (
    <div className="navbar bg-[#ffffff] shadow-sm py-3 px-15 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {navLinks}
      </ul>
    </div>

    {/* navbar left */}
   <div className='flex items-center gap-1 '>
       <img className='w-[40px] h-[40px]' src={logoImg} alt="" />
      <a className=" font-bold text-xl text-[#632ee3]">HERO.IO</a>
   </div>
  </div>
  {/* navbar center */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  {/* navbar right */}
  <div className="navbar-end ">
    <a className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white text-base  font-semibold "><FaGithub /> Contribute</a>
  </div>
</div>
  
  );
};

export default Navbar;