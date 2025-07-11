## Job Board – CODSOFT Internship (Level 2 Task 1)

This project is built as part of **CODSOFT Web Development Internship – Level 2 Task 1**. It is a fully functional **Job Board Web Application** with features for Employers and Candidates.

---

## Project Structure

CODSOFT/Job Board/
├─ job-board/ # Frontend (React)
├─ job-board-backend/ # Backend (Node.js + Express)
├─ README.md # You are here


---

## Tech Stack

### Frontend:
- React.js (with React Router)
- Bootstrap 5
- Axios

### Backend:
- Node.js
- Express.js
- MongoDB (via Mongoose)
- Multer (resume upload)
- bcrypt (password encryption)
- dotenv
- nodemailer (Forgot Password feature)

---

## Features Implemented

### Candidate
- View all jobs
- Search jobs by title/location
- Apply with resume upload
- Register/Login
- View applied jobs (dashboard)

### Employer
- Post jobs
- View all posted jobs
- Delete jobs / Mark as Closed
- View candidate applications
- Separate login

### Authentication
- Registration with Role selection
- Login with dashboard redirection
- Forgot password (via Gmail)

---

## Setup Instructions

### 1. Backend Setup

```bash
cd job-board-backend
npm install
# Create a .env file with:
# MONGO_URI=...
# GMAIL_USER=...
# GMAIL_PASS=...
npm run dev
```
### 2. Frontend Setup
```bash
cd job-board
npm install
npm start
```

---

## Deployment Links


 Frontend (Netlify): your-frontend-url
 Backend (Render): your-backend-url


---

## Author

**Nithiyasree M**
**Batch:** BATCHB38 
**CODSOFT Web Development Internship – July 2025
**



<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/b9013e05-86b9-467f-aa72-6a973cd8943e" />

