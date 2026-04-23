import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav style={{ 
      padding: '10px 20px', 
      background: '#131921', 
      color: 'white', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center' 
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>amazon</h1>
      </Link>

      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <div style={{ cursor: 'pointer' }}>
          <p style={{ fontSize: '12px', margin: 0 }}>Hello, {user ? user.name : 'sign in'}</p>
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>
            {user ? (
              <span onClick={logout}>Sign Out</span>
            ) : (
              <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Account & Lists</Link>
            )}
          </div>
        </div>

        <Link to="/cart" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Cart</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
