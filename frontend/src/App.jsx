import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">홈</Link>
          <Link to="/about">소개</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<h1>메인 페이지</h1>} />
        <Route path="/about" element={<h1>소개 페이지</h1>} />
      </Routes>
    </>
  );
}

export default App;
