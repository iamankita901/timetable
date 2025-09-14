// src/components/Topbar.js
import React from 'react';
import './Topbar.css';
import { FaBars } from 'react-icons/fa';

const Topbar = ({ onToggle, collapsed }) => {
  return (
    <header className="topbar">
      <div className="left">
        <button className="hamb" onClick={onToggle}><FaBars/></button>
        <div className="page-title">Admin Dashboard</div>
      </div>

      <div className="right">
        <input className="search" placeholder="Search anything..." />
        <div className="user">Admin <img src="https://i.pravatar.cc/40" alt="profile"/></div>
      </div>
    </header>
  );
};

export default Topbar;
