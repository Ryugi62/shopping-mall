import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';

function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">홈</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
