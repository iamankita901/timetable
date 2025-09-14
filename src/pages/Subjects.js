import React, { useState } from 'react';
import { subjects as subjectsData, streams } from '../data/mockData';
import '../pages/pages.css';
import Modal from '../components/Modal';

const Subjects = () => {
  const [items, setItems] = useState(subjectsData);
  const [q, setQ] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterStream, setFilterStream] = useState('');
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name:'', type:'Theory', streamId:'', hoursPerWeek:3 });

  const openAdd = () => { setForm({ name:'', type:'Theory', streamId:'', hoursPerWeek:3 }); setOpen(true); };
  const submit = () => {
    if(!form.name || !form.streamId) return alert('Required');
    setItems(prev => [...prev, { id: Date.now(), name: form.name, type: form.type, streamId: parseInt(form.streamId), hoursPerWeek: parseInt(form.hoursPerWeek) }]);
    setOpen(false);
  };

  const filtered = items.filter(s => (!q || s.name.toLowerCase().includes(q.toLowerCase())) && (!filterType || s.type === filterType) && (!filterStream || s.streamId === parseInt(filterStream)));

  return (
    <div className="page">
      <h2>Subjects</h2>
      <div className="controls">
        <input placeholder="Search subjects..." value={q} onChange={e=>setQ(e.target.value)} />
        <select value={filterType} onChange={e=>setFilterType(e.target.value)}>
          <option value="">All Types</option><option value="Theory">Theory</option><option value="Lab">Lab</option>
        </select>
        <select value={filterStream} onChange={e=>setFilterStream(e.target.value)}>
          <option value="">All Streams</option>
          {streams.map(st=> <option key={st.id} value={st.id}>{st.name}</option>)}
        </select>
        <button className="btn primary" onClick={openAdd}>Add Subject</button>
      </div>

      <table className="table">
        <thead><tr><th>ID</th><th>Name</th><th>Type</th><th>Stream</th><th>Hours/week</th></tr></thead>
        <tbody>
          {filtered.map(s=>(
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.type}</td>
              <td>{streams.find(st=>st.id===s.streamId)?.name || '-'}</td>
              <td>{s.hoursPerWeek}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal open={open} title="Add Subject" onClose={()=>setOpen(false)}>
        <div style={{display:'grid', gap:8}}>
          <label>Name<input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} /></label>
          <label>Type
            <select value={form.type} onChange={e=>setForm({...form, type:e.target.value})}>
              <option value="Theory">Theory</option><option value="Lab">Lab</option>
            </select>
          </label>
          <label>Stream
            <select value={form.streamId} onChange={e=>setForm({...form, streamId:e.target.value})}>
              <option value="">Select</option>
              {streams.map(st=> <option key={st.id} value={st.id}>{st.name}</option>)}
            </select>
          </label>
          <label>Hours/week<input type="number" value={form.hoursPerWeek} onChange={e=>setForm({...form, hoursPerWeek:e.target.value})} /></label>

          <div style={{display:'flex', gap:8, justifyContent:'flex-end', marginTop:8}}>
            <button className="btn" onClick={()=>setOpen(false)}>Cancel</button>
            <button className="btn primary" onClick={submit}>Save</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default Subjects;

