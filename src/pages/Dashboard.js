import React from 'react';
import { universities, programs, streams, sections, subjects } from '../data/mockData';
import '../pages/pages.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const Dashboard = () => {
  const totalUniv = universities.length;
  const totalPrograms = programs.length;
  const totalStreams = streams.length;
  const totalSections = sections.length;
  const totalStudents = sections.reduce((s, x) => s + (x.students || 0), 0);
  const avgStudents = totalSections ? (totalStudents / totalSections).toFixed(1) : 0;
  const totalTheory = subjects.filter(x=>x.type==='Theory').length;
  const totalLab = subjects.filter(x=>x.type==='Lab').length;
  const totalHours = subjects.reduce((a,b)=>a + (b.hoursPerWeek||0),0);

  // chart data: students per section (top 6)
  const studentsData = [...sections].map(s => ({ name: s.name, students: s.students }));
  const pieData = [
    { name: 'Theory', value: totalTheory },
    { name: 'Lab', value: totalLab }
  ];
  const COLORS = ['#2d6cdf', '#ff8c42'];

  return (
    <div className="page">
      <h2>Overview</h2>

      <div className="card-grid">
        <div className="card"><h3>{totalUniv}</h3><p>Universities</p></div>
        <div className="card"><h3>{totalPrograms}</h3><p>Programs</p></div>
        <div className="card"><h3>{totalStreams}</h3><p>Streams</p></div>
        <div className="card"><h3>{totalSections}</h3><p>Sections</p></div>
        <div className="card"><h3>{totalStudents}</h3><p>Students</p></div>
        <div className="card"><h3>{avgStudents}</h3><p>Avg students/section</p></div>
        <div className="card"><h3>{totalTheory}</h3><p>Theory Subjects</p></div>
        <div className="card"><h3>{totalLab}</h3><p>Lab Subjects</p></div>
        <div className="card"><h3>{totalHours}</h3><p>Total hours/week</p></div>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'1fr 380px', gap:16, marginTop:18}}>
        <div className="card" style={{height:300}}>
          <h4>Students per Section</h4>
          <ResponsiveContainer width="100%" height="85%">
            <BarChart data={studentsData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="students" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card" style={{height:300}}>
          <h4>Theory vs Lab Subjects</h4>
          <ResponsiveContainer width="100%" height="85%">
            <PieChart>
              <Pie data={pieData} innerRadius={50} outerRadius={90} dataKey="value" label>
                {pieData.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;

