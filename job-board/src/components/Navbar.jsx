import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("role");
    window.location.href = "/login";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Job Board</Link>
        <div className="d-flex">
          <Link to="/jobs" className="btn btn-outline-primary me-2">Jobs</Link>
          <Link to="/post" className="btn btn-outline-success me-2">Post Job</Link>
          {!isLoggedIn ? (
            <Link to="/login" className="btn btn-outline-dark">Login</Link>
          ) : (
            <button onClick={handleLogout} className="btn btn-outline-danger">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
