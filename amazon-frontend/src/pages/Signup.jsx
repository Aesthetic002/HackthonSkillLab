import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/signup`, { name, email, password });
      login(res.data.token, res.data.user);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Signup failed');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Create account</h2>
        {error && <p style={{ color: '#c40000', fontSize: '13px', marginBottom: '10px' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your name</label>
          <input 
            id="name"
            type="text" 
            placeholder="First and last name"
            value={name} 
            onChange={e => setName(e.target.value)} 
            required 
          />

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
            placeholder="At least 6 characters"
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            required 
          />
          <p style={{ fontSize: '12px', marginBottom: '18px', color: '#555' }}>
            <i>i</i> Passwords must be at least 6 characters.
          </p>
          
          <button type="submit" className="auth-btn">Create your Amazon account</button>
        </form>
        
        <p className="auth-footer" style={{ marginTop: '20px' }}>
          By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>

        <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #e7e7e7' }} />

        <p className="auth-footer">
          Already have an account? <Link to="/login">Sign-In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
