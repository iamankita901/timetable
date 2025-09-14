// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { FaTachometerAlt, FaUniversity, FaBookOpen, FaStream, FaLayerGroup, FaFlask, FaChalkboardTeacher } from 'react-icons/fa';

const Sidebar = ({ collapsed }) => {
  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="logo">{collapsed ? 'UA' : 'UniAdmin'}</div>
      <nav>
        <NavLink to="/" end className={({isActive}) => isActive ? 'nav active' : 'nav'}>
          <FaTachometerAlt className="i"/> {!collapsed && 'Dashboard'}
        </NavLink>
        <NavLink to="/universities" className={({isActive}) => isActive ? 'nav active' : 'nav'}>
          <FaUniversity className="i"/> {!collapsed && 'Universities'}
        </NavLink>
        <NavLink to="/programs" className={({isActive}) => isActive ? 'nav active' : 'nav'}>
          <FaBookOpen className="i"/> {!collapsed && 'Programs'}
        </NavLink>
        <NavLink to="/streams" className={({isActive}) => isActive ? 'nav active' : 'nav'}>
          <FaStream className="i"/> {!collapsed && 'Streams'}
        </NavLink>
        <NavLink to="/sections" className={({isActive}) => isActive ? 'nav active' : 'nav'}>
          <FaLayerGroup className="i"/> {!collapsed && 'Sections'}
        </NavLink>
        <NavLink to="/subjects" className={({isActive}) => isActive ? 'nav active' : 'nav'}>
          <FaBookOpen className="i"/> {!collapsed && 'Subjects'}
        </NavLink>
        <NavLink to="/classes" className={({isActive}) => isActive ? 'nav active' : 'nav'}>
          <FaStream className="i"/> {!collapsed && 'Classes'}
        </NavLink>
        <NavLink to="/labs" className={({isActive}) => isActive ? 'nav active' : 'nav'}>
          <FaFlask className="i"/> {!collapsed && 'Labs'}
        </NavLink>
        <NavLink to="/professors" className={({isActive}) => isActive ? 'nav active' : 'nav'}>
          <FaChalkboardTeacher className="i"/> {!collapsed && 'Professors'}
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
