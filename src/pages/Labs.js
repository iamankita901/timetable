import React, { useState } from 'react';
import { labs as labsData, sections, subjects } from '../data/mockData';
import '../pages/pages.css';
import Modal from '../components/Modal';

const Labs = () => {
  const [items, setItems] = useState(labsData);
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name:'', sectionId:'', subjectId:'' });

  const openAdd = () => { setForm({ name:'', sectionId:'', subjectId:'' }); setOpen(true); };
  const submit = () => {
    if(!form.name || !form.sectionId || !form.subjectId) return alert('Required');
    setItems(prev => [...prev, { id: Date.now(), name: form.name, sectionId: parseInt(form.sectionId), subjectId: parseInt(form.subjectId) }]);
    setOpen(false);
  };

  const filtered = items.filter(l => !q || l.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="page">
      <h2>Labs</h2>
      <div className="controls">
        <input placeholder="Search labs..." value={q} onChange={e=>setQ(e.target.value)} />
        <button className="btn primary" onClick={openAdd}>Add Lab</button>
      </div>

      <table className="table">
        <thead><tr><th>ID</th><th>Name</th><th>Section</th><th>Subject</th></tr></thead>
        <tbody>
          {filtered.map(l=>(
            <tr key={l.id}>
              <td>{l.id}</td>
              <td>{l.name}</td>
              <td>{sections.find(s=>s.id===l.sectionId)?.name || '-'}</td>
              <td>{subjects.find(s=>s.id===l.subjectId)?.name || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal open={open} title="Add Lab" onClose={()=>setOpen(false)}>
        <div style={{display:'grid', gap:8}}>
          <label>Name<input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} /></label>
          <label>Section
            <select value={form.sectionId} onChange={e=>setForm({...form, sectionId:e.target.value})}>
              <option value="">Select</option>{sections.map(s=> <option key={s.id} value={s.id}>{s.name}</option>)}
            </select>
          </label>
          <label>Subject
            <select value={form.subjectId} onChange={e=>setForm({...form, subjectId:e.target.value})}>
              <option value="">Select</option>{subjects.map(s=> <option key={s.id} value={s.id}>{s.name}</option>)}
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
export default Labs;
;
