// src/pages/Dashboard.js
import React from "react";
import "./Dashboard.css";
import {
  universities,
  programs,
  streams,
  sections,
  subjects,
  professors,
} from "../data/mockData";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard Overview</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Universities</h3>
          <p>{universities.length}</p>
        </div>
        <div className="stat-card">
          <h3>Programs</h3>
          <p>{programs.length}</p>
        </div>
        <div className="stat-card">
          <h3>Streams</h3>
          <p>{streams.length}</p>
        </div>
        <div className="stat-card">
          <h3>Sections</h3>
          <p>{sections.length}</p>
        </div>
        <div className="stat-card">
          <h3>Subjects</h3>
          <p>{subjects.length}</p>
        </div>
        <div className="stat-card">
          <h3>Professors</h3>
          <p>{professors.length}</p>
        </div>
      </div>

      {/* Recent Actions Section */}
      <div className="recent-actions">
        <h3>Recent Actions</h3>
        <ul>
          <li>✅ Added new subject: <strong>Computer Networks</strong></li>
          <li>✏️ Updated program details: <strong>B.Tech CSE</strong></li>
          <li>➕ Added new professor: <strong>Dr. Sharma</strong></li>
          <li>📌 Created section: <strong>CSE-2025-A</strong></li>
          <li>🗑️ Removed lab class: <strong>Physics Lab</strong></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

