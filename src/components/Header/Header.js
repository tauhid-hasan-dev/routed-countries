import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
            <div className="navbar bg-main-color  shadow-md px-20 py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink>Item One</NavLink>
                        <NavLink>Item One</NavLink>
                        <NavLink>Item One</NavLink>
                        <NavLink>Item One</NavLink>
                      
                    </ul>
                    </div>
                    <a href=" " className="btn btn-ghost normal-case text-4xl text-logo-color font-bold ">foody</a>
                </div>
                <div className="navbar-center hidden lg:flex text-6xl text-logo-text-color  ">
                    <FontAwesomeIcon icon={faBurger} />
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-slate-100 gap-4">
                    <NavLink
                    to="/home"
                    >Home</NavLink>
                            <NavLink to='/menu' >Menu</NavLink>
                            <NavLink to='/offers'>Offers</NavLink>
                            <NavLink to= '/rewards' >Rewards</NavLink>
                    </ul>
                </div> 
            </div>
    );
};

export default Header;