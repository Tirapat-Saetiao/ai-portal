import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ loggedIn, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <NavLink to="/home"></NavLink>
        </div>
        <div className="titles">
          <div className="main-title">AI.MFU</div>
          <div className="sub-title">AI PORTAL FOR MFU</div>
        </div>
      </div>
      <div className="navbar-right">
        <NavLink to="/home" className="navbar-link" activeClassName="active">Home</NavLink>
        <NavLink to="/ai-service" className="navbar-link" activeClassName="active">AI Service</NavLink>
        <NavLink to="/sharing" className="navbar-link" activeClassName="active">Sharing</NavLink>
        <NavLink to="/contact" className="navbar-link" activeClassName="active">Contact</NavLink>
        {loggedIn ? (
          <button
            onClick={onLogout}
            className="navbar-link navbar-logout"
            aria-label="Log out of account"
          >
            Logout
          </button>
        ) : (
          <NavLink to="/login" className="navbar-link navbar-login" activeClassName="active">Login</NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
