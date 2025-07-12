import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import JobList from './pages/JobList';
import JobDetail from './pages/JobDetail';
import PostJob from './pages/PostJob';
import Home from './pages/Home';
import ApplyJob from './pages/ApplyJob';
import EmployerDashboard from './pages/EmployerDashboard';
import CandidateDashboard from './pages/CandidateDashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';


//const Home = () => <h2 className="text-center mt-5">Welcome to Job Board!</h2>;
//const PostJob = () => <h2 className="text-center mt-5">Post a New Job</h2>;
//const Login = () => <h2 className="text-center mt-5">Login Page</h2>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/post" element={<PostJob />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<ApplyJob />} />
        <Route path="/employer" element={<EmployerDashboard/>}/>
        <Route path="/candidate" element={<CandidateDashboard/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
