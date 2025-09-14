import React, { useState } from 'react';
import "../components/FormDialog.css";
import { professors as profsData, subjects } from '../data/mockData';
import '../pages/pages.css';
import Modal from '../components/Modal';

const Professors = () => {
  const [items, setItems] = useState(profsData);
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name:'', subjects:[] });

  const openAdd = () => { setForm({ name:'', subjects:[] }); setOpen(true); };
  const submit = () => {
    if(!form.name) return alert('Name required');
    setItems(prev => [...prev, { id: Date.now(), name: form.name, subjects: form.subjects.map(Number).filter(Boolean) }]);
    setOpen(false);
  };

  const filtered = items.filter(p => !q || p.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="page">
      <h2>Professors</h2>
      <div className="controls">
        <input placeholder="Search professors..." value={q} onChange={e=>setQ(e.target.value)} />
        <button className="btn primary" onClick={openAdd}>Add Professor</button>
      </div>

      <table className="table">
        <thead><tr><th>ID</th><th>Name</th><th>Subjects</th></tr></thead>
        <tbody>
          {filtered.map(p=>(
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.subjects.map(id=>subjects.find(s=>s.id===id)?.name).filter(Boolean).join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal open={open} title="Add Professor" onClose={()=>setOpen(false)}>
        <div style={{display:'grid', gap:8}}>
          <label>Name<input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} /></label>
          <label>Subjects (select multiple with Ctrl/Cmd)
            <select multiple value={form.subjects} onChange={e=>setForm({...form, subjects: Array.from(e.target.selectedOptions).map(o=>o.value)})}>
              {subjects.map(s=> <option key={s.id} value={s.id}>{s.name}</option>)}
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
export default Professors;
