import React, { useState } from 'react';
import { streams as streamsData, programs } from '../data/mockData';
import '../pages/pages.css';
import Modal from '../components/Modal';

const Streams = () => {
  const [streams, setStreams] = useState(streamsData);
  const [q, setQ] = useState('');
  const [filterProgram, setFilterProgram] = useState('');
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name:'', programId:'' });

  const openAdd = () => { setForm({ name:'', programId:'' }); setOpen(true); };
  const submit = () => {
    if (!form.name || !form.programId) return alert('Required');
    setStreams(prev => [...prev, { id: Date.now(), name: form.name, programId: parseInt(form.programId) }]);
    setOpen(false);
  };

  const filtered = streams.filter(s => (!q || s.name.toLowerCase().includes(q.toLowerCase())) && (!filterProgram || s.programId === parseInt(filterProgram)));

  return (
    <div className="page">
      <h2>Streams</h2>
      <div className="controls">
        <input placeholder="Search streams..." value={q} onChange={e=>setQ(e.target.value)} />
        <select value={filterProgram} onChange={e=>setFilterProgram(e.target.value)}>
          <option value="">All Programs</option>
          {programs.map(p=> <option key={p.id} value={p.id}>{p.name}</option>)}
        </select>
        <button className="btn primary" onClick={openAdd}>Add Stream</button>
      </div>

      <table className="table">
        <thead><tr><th>ID</th><th>Name</th><th>Program</th></tr></thead>
        <tbody>
          {filtered.map(s=>(
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{programs.find(p=>p.id===s.programId)?.name || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal open={open} title="Add Stream" onClose={()=>setOpen(false)}>
        <div style={{display:'grid', gap:8}}>
          <label>Name<input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} /></label>
          <label>Program
            <select value={form.programId} onChange={e=>setForm({...form, programId:e.target.value})}>
              <option value="">Select</option>
              {programs.map(p=> <option key={p.id} value={p.id}>{p.name}</option>)}
            </select>
          </label>
          <div style={{display:'flex', gap:8, justifyContent:'flex-end', marginTop:8}}>
            <button className="btn" onClick={()=>setOpen(false)}>Cancel</button>
            <button className="btn primary" onClick={submit}>Save</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default Streams;
