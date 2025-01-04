

import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li>
          <NavLink to="/" className="nav-link" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/programs" className="nav-link">
            Program
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/campus" className="nav-link">
            Campus
          </NavLink>
        </li>
        <li>
          <NavLink to="/testimonials" className="nav-link">
            Testimonials
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="btn">
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
