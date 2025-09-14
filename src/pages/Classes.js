import React, { useState } from 'react';
import { classes as classesData, sections, subjects, professors } from '../data/mockData';
import '../pages/pages.css';
import Modal from '../components/Modal';

const ClassesPage = () => {
  const [items, setItems] = useState(classesData);
  const [q, setQ] = useState('');
  const [filterDay, setFilterDay] = useState('');
  const [filterType, setFilterType] = useState('');
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ sectionId:'', subjectId:'', professorId:'', type:'Theory', durationMins:50, day:'Mon' });

  const openAdd = () => { setForm({ sectionId:'', subjectId:'', professorId:'', type:'Theory', durationMins:50, day:'Mon' }); setOpen(true); };
  const submit = () => {
    if(!form.sectionId || !form.subjectId || !form.professorId) return alert('Required');
    setItems(prev => [...prev, { id: Date.now(), sectionId: parseInt(form.sectionId), subjectId: parseInt(form.subjectId), professorId: parseInt(form.professorId), type: form.type, durationMins: parseInt(form.durationMins), day: form.day }]);
    setOpen(false);
  };

  const filtered = items.filter(c =>
    (!q || sections.find(s=>s.id===c.sectionId)?.name.toLowerCase().includes(q.toLowerCase()) || subjects.find(s=>s.id===c.subjectId)?.name.toLowerCase().includes(q.toLowerCase()))
    && (!filterDay || c.day === filterDay)
    && (!filterType || c.type === filterType)
  );

  return (
    <div className="page">
      <h2>Classes (Schedule)</h2>
      <div className="controls">
        <input placeholder="Search (section or subject)..." value={q} onChange={e=>setQ(e.target.value)} />
        <select value={filterDay} onChange={e=>setFilterDay(e.target.value)}>
          <option value="">All Days</option>
          <option>Mon</option><option>Tue</option><option>Wed</option><option>Thu</option><option>Fri</option>
        </select>
        <select value={filterType} onChange={e=>setFilterType(e.target.value)}>
          <option value="">All Types</option>
          <option>Theory</option><option>Lab</option>
        </select>
        <button className="btn primary" onClick={openAdd}>Add Class</button>
      </div>

      <table className="table">
        <thead><tr><th>ID</th><th>Section</th><th>Subject</th><th>Professor</th><th>Type</th><th>Duration</th><th>Day</th></tr></thead>
        <tbody>
          {filtered.map(c=>(
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{sections.find(s=>s.id===c.sectionId)?.name}</td>
              <td>{subjects.find(s=>s.id===c.subjectId)?.name}</td>
              <td>{professors.find(p=>p.id===c.professorId)?.name}</td>
              <td>{c.type}</td>
              <td>{c.durationMins} mins</td>
              <td>{c.day}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal open={open} title="Add Class" onClose={()=>setOpen(false)}>
        <div style={{display:'grid', gap:8}}>
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
          <label>Professor
            <select value={form.professorId} onChange={e=>setForm({...form, professorId:e.target.value})}>
              <option value="">Select</option>{professors.map(p=> <option key={p.id} value={p.id}>{p.name}</option>)}
            </select>
          </label>
          <label>Type
            <select value={form.type} onChange={e=>setForm({...form, type:e.target.value})}>
              <option>Theory</option><option>Lab</option>
            </select>
          </label>
          <label>Duration (mins)<input type="number" value={form.durationMins} onChange={e=>setForm({...form, durationMins:e.target.value})} /></label>
          <label>Day
            <select value={form.day} onChange={e=>setForm({...form, day:e.target.value})}>
              <option>Mon</option><option>Tue</option><option>Wed</option><option>Thu</option><option>Fri</option>
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
export default ClassesPage;
