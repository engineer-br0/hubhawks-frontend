import React, { useState } from 'react';
import './Signin.css';
import {Link, useNavigate} from "react-router-dom"
import Signup from './SignupForm';

const Signin = () => {
    //const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignin = async () => {
    
  };

  return (
    <div className="signin-container">
      <h2>Signin</h2>
      <div className="input-group">
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className="btn btn-success" onClick={handleSignin}>Sign In</button>
      <p className="message">{message}</p>
      <div className="signup-link">
        <p>Not registered? <Link style={{textDecoration:"none"}} to="/signup"> Sign up </Link>  now!</p>
        
      </div>
    </div>
  );
};

export default Signin;
