import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/api';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await API.get('/jobs');
        setJobs(res.data);
      } catch (err) {
        console.error('Failed to fetch jobs:', err);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Current Job Openings</h2>

      <input
        type="text"
        placeholder="Search by title or location..."
        className="form-control mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {jobs
          .filter(job =>
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.location.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map(job => (
            <div className="col" key={job._id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{job.title}</h5>
                  <p className="card-text">{job.company} - {job.location}</p>
                  <Link to={`/jobs/${job._id}`} className="btn btn-primary">View Details</Link>
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
