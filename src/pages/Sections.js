import React, { useState } from 'react';
import { sections as sectionsData, streams } from '../data/mockData';
import '../pages/pages.css';
import Modal from '../components/Modal';

const Sections = () => {
  const [items, setItems] = useState(sectionsData);
  const [q, setQ] = useState('');
  const [filterStream, setFilterStream] = useState('');
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name:'', streamId:'', students:30, year:new Date().getFullYear() });

  const openAdd = () => { setForm({ name:'', streamId:'', students:30, year:new Date().getFullYear() }); setOpen(true); };
  const submit = () => {
    if (!form.name || !form.streamId) return alert('Required');
    setItems(prev => [...prev, { id: Date.now(), name: form.name, streamId: parseInt(form.streamId), students: parseInt(form.students), year: parseInt(form.year) }]);
    setOpen(false);
  };

  const filtered = items.filter(s => (!q || s.name.toLowerCase().includes(q.toLowerCase())) && (!filterStream || s.streamId === parseInt(filterStream)));

  return (
    <div className="page">
      <h2>Sections</h2>
      <div className="controls">
        <input placeholder="Search sections..." value={q} onChange={e=>setQ(e.target.value)} />
        <select value={filterStream} onChange={e=>setFilterStream(e.target.value)}>
          <option value="">All Streams</option>
          {streams.map(s=> <option key={s.id} value={s.id}>{s.name}</option>)}
        </select>
        <button className="btn primary" onClick={openAdd}>Add Section</button>
      </div>

      <table className="table">
        <thead><tr><th>ID</th><th>Name</th><th>Stream</th><th>Students</th><th>Year</th></tr></thead>
        <tbody>
          {filtered.map(s=>(
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{streams.find(st=>st.id===s.streamId)?.name || '-'}</td>
              <td>{s.students}</td>
              <td>{s.year}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal open={open} title="Add Section" onClose={()=>setOpen(false)}>
        <div style={{display:'grid', gap:8}}>
          <label>Name<input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} /></label>
          <label>Stream
            <select value={form.streamId} onChange={e=>setForm({...form, streamId:e.target.value})}>
              <option value="">Select</option>
              {streams.map(st=> <option key={st.id} value={st.id}>{st.name}</option>)}
            </select>
          </label>
          <label>Students<input type="number" value={form.students} onChange={e=>setForm({...form, students:e.target.value})} /></label>
          <label>Year<input type="number" value={form.year} onChange={e=>setForm({...form, year:e.target.value})} /></label>

          <div style={{display:'flex', gap:8, justifyContent:'flex-end', marginTop:8}}>
            <button className="btn" onClick={()=>setOpen(false)}>Cancel</button>
            <button className="btn primary" onClick={submit}>Save</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default Sections;
