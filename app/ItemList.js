import React from 'react';

function ItemList() {
  const items = ['Pen', 'Book', 'Laptop', 'Mouse'];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Items:</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;