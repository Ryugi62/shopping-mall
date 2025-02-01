import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header
      style={{
        backgroundColor: '#eee',
        padding: '1rem',
        marginBottom: '1rem',
      }}
    >
      <nav>
        <Link to="/">홈</Link> | <Link to="/login">로그인</Link> |{' '}
        <Link to="/cart">장바구니</Link> | <Link to="/checkout">결제</Link>
      </nav>
    </header>
  );
}

export default Header;
