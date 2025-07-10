import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // We'll style it separately

const Home = () => {
  return (
    <div className="hero-container">
      <div className="overlay">
        <h1 className="display-4 text-white">Find Your Dream Job</h1>
        <p className="lead text-white">Connecting talents with opportunities</p>
        <div className="mt-4 d-flex justify-content-center flex-wrap gap-3">
          <Link to="/post" className="btn btn-light me-3 mb-2">Post a Job</Link>
          <Link to="/login" className="btn btn-outline-light me-3 mb-2">Login</Link>
          <Link to="/apply" className="btn btn-success mb-2">Apply for Job</Link>
          <Link to="/employer" className="btn btn-outline-primary mb-2">Employer Dashboard</Link>


        </div>
      </div>
    </div>
  );
};

export default Home;
