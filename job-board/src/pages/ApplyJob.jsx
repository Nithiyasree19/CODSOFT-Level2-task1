import React, { useState } from 'react';
import axios from 'axios';

const ApplyJob = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form data for file upload
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('resume', formData.resume);

    try {
       await axios.post('http://localhost:5000/api/apply', data);
      alert('Application submitted successfully!');
    } catch (err) {
      console.error(err);
      alert('Submission failed. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Apply for Job</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Upload Resume</label>
          <input type="file" name="resume" className="form-control" onChange={handleFileChange} required />
        </div>
        <button type="submit" className="btn btn-success">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplyJob;
