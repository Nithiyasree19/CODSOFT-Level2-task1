import React, { useState } from 'react';
import API from '../services/api';

const PostJob = () => {
  const [job, setJob] = useState({
    title: '',
    company: '',
    location: '',
    description: ''
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/jobs', job);
      alert(' Job posted successfully!');
      console.log(res.data);
      // Reset form
      setJob({ title: '', company: '', location: '', description: '' });
    } catch (err) {
      console.error(' Failed to post job:', err);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Job Title</label>
          <input type="text" className="form-control" name="title" value={job.title} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Company</label>
          <input type="text" className="form-control" name="company" value={job.company} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input type="text" className="form-control" name="location" value={job.location} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Job Description</label>
          <textarea className="form-control" name="description" value={job.description} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">Post Job</button>
      </form>
    </div>
  );
};

export default PostJob;
