import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/planet.png';
import '../styles/header.css';

const Header = () => (
  <nav>
    <div className="logoTitle">
      <img src={logo} alt="space-traveler-logo" />
      <h1>Space Travelers Hub</h1>
    </div>
    <div className="navLinks">
      <Link to="/" className="links active-link">Rockects</Link>
      <Link to="/" className="links">Missions</Link>
      <Link to="/missions" className="links">Missions</Link>
      {' '}
      |
      <Link to="/myProfile" className="links">My Profile</Link>
    </div>
  </nav>
);

export default Header;
