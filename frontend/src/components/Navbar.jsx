import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem('token');

  return (
    <nav className="navbar">
      <h1 className="logo">CRM Platform</h1>
      <ul className="nav-links">
        {token ? (
          <>
            <li><Link to="/leads">Leads</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
