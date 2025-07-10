import React, { useEffect, useState } from 'react';
import API from '../services/api';

const EmployerDashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchPostedJobs = async () => {
      try {
        const res = await API.get('/jobs');
        setJobs(res.data);
      } catch (err) {
        console.error('Error fetching employer jobs:', err);
      }
    };

    fetchPostedJobs();
  }, []);

const handleDelete = async (jobId) => {
  try {
    await API.delete(`/jobs/${jobId}`);
    setJobs(prevJobs => prevJobs.filter(job => job._id !== jobId)); // Update UI
  } catch (err) {
    console.error("Failed to delete job:", err);
  }
};

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Employer Dashboard</h2>
      {jobs.length === 0 ? (
        <p>No jobs posted yet.</p>
      ) : (
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Title</th>
              <th>Company</th>
              <th>Location</th>
              <th>Date Posted</th>
              <th>Actions</th> 
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job._id}>
                <td>{job.title}</td>
                <td>{job.company}</td>
                <td>{job.location}</td>
                <td>{new Date(job.createdAt).toLocaleDateString()}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(job._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};


export default EmployerDashboard;
