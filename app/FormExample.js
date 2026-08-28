'use client'; // <-- Required for useState and onSubmit in Next.js App Router

import React, { useState } from 'react';

function FormExample() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Name: ${name}`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input 
          type="text"
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          style={{ padding: '5px', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '5px 10px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormExample;