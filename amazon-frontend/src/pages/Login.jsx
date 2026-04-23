import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, { email, password });
      login(res.data.token, res.data.user);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Sign-In</h2>
        {error && <p style={{ color: '#c40000', fontSize: '13px', marginBottom: '10px' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input 
            id="email"
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required 
          />
          
          <label htmlFor="password">Password</label>
          <input 
            id="password"
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            required 
          />
          
          <button type="submit" className="auth-btn">Sign-In</button>
        </form>
        
        <p className="auth-footer">
          By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>
      </div>
      
      <div className="auth-footer" style={{ marginTop: '25px', textAlign: 'center' }}>
        <p style={{ color: '#888', marginBottom: '10px' }}>New to Amazon?</p>
        <Link to="/signup">
          <button className="auth-btn" style={{ background: '#e7e9ec', border: '1px solid #adb1b8' }}>
            Create your Amazon account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
