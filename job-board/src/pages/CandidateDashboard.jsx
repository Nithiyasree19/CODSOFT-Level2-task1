import React, { useEffect, useState } from 'react';
import API from '../services/api';

const CandidateDashboard = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await API.get('/applications');
        setApplications(res.data);
      } catch (err) {
        console.error('Failed to load applications:', err);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Candidate Dashboard</h2>

      {applications.length === 0 ? (
        <p>No applications submitted yet.</p>
      ) : (
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Job Title</th>
              <th>Resume</th>
              <th>Date Applied</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={index}>
                <td>{app.name}</td>
                <td>{app.email}</td>
                <td>{app.jobTitle}</td>
                <td>
                  <a
                    href={`http://localhost:5000/uploads/${app.resume}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {app.resume}
                  </a>
                </td>
                <td>{new Date(app.appliedAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};


export default CandidateDashboard;
