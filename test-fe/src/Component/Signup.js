import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobileNumber: '',
    userType: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
          <input type="tel" className="form-control" id="mobileNumber" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="userType" className="form-label">User Type</label>
          <select className="form-select" id="userType" name="userType" value={formData.userType} onChange={handleInputChange} required>
            <option value="">Select User Type</option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
