import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';  // 
import API from '../services/api';

const Login = () => {
  document.title = "Login - Job Board";

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', { email, password });

      localStorage.setItem("role", res.data.role); // stores the role

      if (res.data.role === 'employer') {
        navigate('/employer');
      } else if (res.data.role === 'candidate') {
        navigate('/candidate');
      }
    } catch (err) {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        
        <div className="mb-3 text-end">
          <Link to="/forgot-password" className="text-decoration-none">
            Forgot Password?
          </Link>
        </div>

        <button type="submit" className="btn btn-success w-100">Login</button>

        <div className="mt-3 text-center">
          Don’t have an account? <Link to="/register">Register!</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
