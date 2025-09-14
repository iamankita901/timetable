import React, { useState } from 'react';
import "../components/FormDialog.css";
import { programs as programsData, universities } from '../data/mockData';
import '../pages/pages.css';
import Modal from '../components/Modal';

const Programs = () => {
  const [programs, setPrograms] = useState(programsData);
  const [q, setQ] = useState('');
  const [filterUni, setFilterUni] = useState('');
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', universityId: '', years: 4 });

  const openAdd = () => { setForm({ name:'', universityId:'', years:4 }); setOpen(true); };
  const submit = () => {
    if (!form.name || !form.universityId) return alert('Name & University required');
    setPrograms(prev => [...prev, { id: Date.now(), name: form.name, universityId: parseInt(form.universityId), years: parseInt(form.years) }]);
    setOpen(false);
  };

  const filtered = programs.filter(p => (!q || p.name.toLowerCase().includes(q.toLowerCase())) && (!filterUni || p.universityId === parseInt(filterUni)));

  return (
    <div className="page">
      <h2>Programs</h2>
      <div className="controls">
        <input placeholder="Search program..." value={q} onChange={e=>setQ(e.target.value)} />
        <select value={filterUni} onChange={e=>setFilterUni(e.target.value)}>
          <option value="">All Universities</option>
          {universities.map(u=> <option key={u.id} value={u.id}>{u.name}</option>)}
        </select>
        <button className="btn primary" onClick={openAdd}>Add Program</button>
      </div>

      <table className="table">
        <thead><tr><th>ID</th><th>Name</th><th>University</th><th>Years</th></tr></thead>
        <tbody>
          {filtered.map(p=>(
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{universities.find(u=>u.id===p.universityId)?.name || '-'}</td>
              <td>{p.years}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal open={open} title="Add Program" onClose={()=>setOpen(false)}>
        <div style={{display:'grid', gap:8}}>
          <label>Name<input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} /></label>
          <label>University
            <select value={form.universityId} onChange={e=>setForm({...form, universityId:e.target.value})}>
              <option value="">Select</option>
              {universities.map(u=> <option key={u.id} value={u.id}>{u.name}</option>)}
            </select>
          </label>
          <label>Years<input type="number" value={form.years} onChange={e=>setForm({...form, years:e.target.value})} /></label>
          <div style={{display:'flex', gap:8, justifyContent:'flex-end', marginTop:8}}>
            <button className="btn" onClick={()=>setOpen(false)}>Cancel</button>
            <button className="btn primary" onClick={submit}>Save</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default Programs;
