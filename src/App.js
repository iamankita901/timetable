import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Programs from './pages/Programs';
import Streams from './pages/Streams';
import Sections from './pages/Sections';
import Subjects from './pages/Subjects';
import ClassesPage from './pages/Classes';
import Labs from './pages/Labs';
import Professors from './pages/Professors';
import UniversitiesPage from './pages/Universities';
import './App.css';

function App(){
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    // auto-collapse on small screens and listen for resize
    const mq = window.matchMedia('(max-width: 900px)');
    const set = () => setCollapsed(mq.matches);
    set();
    mq.addEventListener('change', set);
    return () => mq.removeEventListener('change', set);
  }, []);

  return (
    <Router>
      <div className="app">
        <Sidebar collapsed={collapsed}/>
        <div className={`main ${collapsed ? 'collapsed-main' : ''}`}>
          <Topbar onToggle={()=>setCollapsed(s=>!s)} collapsed={collapsed}/>
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/universities" element={<UniversitiesPage/>} />
              <Route path="/programs" element={<Programs/>} />
              <Route path="/streams" element={<Streams/>} />
              <Route path="/sections" element={<Sections/>} />
              <Route path="/subjects" element={<Subjects/>} />
              <Route path="/classes" element={<ClassesPage/>} />
              <Route path="/labs" element={<Labs/>} />
              <Route path="/professors" element={<Professors/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
