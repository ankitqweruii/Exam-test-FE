import React, { useState } from 'react';
import axios from 'axios'
import { EndPoints } from '../Services/config';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const url=process.env.BACKEND_URL
  console.log('url',url)
  const navigate = useNavigate();

  const redirectToSignUp = () => {
    navigate('/signup');
  };
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    
    const { name, value } = e.target;
    
    setFormData({ ...formData, [name]: value });
  };

  const addForminfo=async(data)=>{
 const response=   await axios.post(`http://localhost:8200${EndPoints.userLogin}`,data)
 console.log('response',response)

  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    await addForminfo(formData)
    if (formData.email&&
formData?.password){

} 
else{
  alert('error')
}
 };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleInputChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <br/>
      <button id="sign-up-button"className="btn btn-danger" onClick={redirectToSignUp}>Sign Up</button>
    </div>
  );
};

export default Login;
