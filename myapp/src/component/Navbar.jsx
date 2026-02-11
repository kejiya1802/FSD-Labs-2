import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#f0f0f0', textAlign: 'center' }}>
      <Link to="/">Home</Link>{" | "}
      <Link to="/about">About</Link>
    </nav>
  );
}
