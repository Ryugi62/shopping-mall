import React from 'react';

function Button({ children, onClick }) {
  return (
    <button
      style={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '0.5rem 1rem',
        border: 'none',
        cursor: 'pointer',
        margin: '0.5rem',
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
