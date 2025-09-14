import React, { useState } from 'react';
import { universities as uData } from '../data/mockData';
import '../pages/pages.css';
import Modal from '../components/Modal';

const UniversitiesPage = () => {
  const [list, setList] = useState(uData);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');

  const submit = () => {
    if(!name) return alert('Required');
    setList(prev => [...prev, { id: Date.now(), name }]);
    setName('');
    setOpen(false);
  };

  return (
    <div className="page">
      <h2>Universities</h2>
      <div className="controls">
        <button className="btn primary" onClick={()=>setOpen(true)}>Add University</button>
      </div>

      <div className="card-grid" style={{marginTop:12}}>
        {list.map(u=>(
          <div key={u.id} className="card" style={{padding:16}}>
            <h3>{u.name}</h3>
            <p className="small">ID: {u.id}</p>
          </div>
        ))}
      </div>

      <Modal open={open} title="Add University" onClose={()=>setOpen(false)}>
        <div style={{display:'grid', gap:8}}>
          <label>Name<input value={name} onChange={e=>setName(e.target.value)} /></label>
          <div style={{display:'flex', gap:8, justifyContent:'flex-end'}}>
            <button className="btn" onClick={()=>setOpen(false)}>Cancel</button>
            <button className="btn primary" onClick={submit}>Save</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default UniversitiesPage;
