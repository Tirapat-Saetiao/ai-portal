import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ loggedIn, onLogout }) => {
  const [menuVisible, setMenuVisible] = useState(false); 

  const toggleMenu = () => {
    setMenuVisible(!menuVisible); 
  };

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

      <div className="hamburger-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={`navbar-right ${menuVisible ? 'show' : ''}`}>
        <NavLink to="/home" className="navbar-link" activeClassName="active">Home</NavLink>
        <NavLink to="/ai-article" className="navbar-link" activeClassName="active">AI Article</NavLink>
        <NavLink to="/ai-work" className="navbar-link" activeClassName="active">AI กับงานสายปฏิบัติการ</NavLink>
        <NavLink to="/gen-ai" className="navbar-link" activeClassName="active">Learn Gen AI</NavLink>
        <NavLink to="/workflow" className="navbar-link" activeClassName="active">Workflow and Automation</NavLink>
        <NavLink to="/tools" className="navbar-link" activeClassName="active">Tools</NavLink>
        <NavLink to="/contact" className="navbar-link" activeClassName="active">Contact</NavLink>
        <NavLink to="/special-blog" className="navbar-link" activeClassName="active">special-blog</NavLink>

         {/* Conditional Login/Logout Button */}
         {loggedIn ? (
          <button onClick={onLogout} className="navbar-link navbar-logout">
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active navbar-link" : "navbar-link")}
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
