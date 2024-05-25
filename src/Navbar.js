import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="./Home.js" className="home-link">
        Home
      </Link>
    </nav>
  );
};

export default Navbar;
