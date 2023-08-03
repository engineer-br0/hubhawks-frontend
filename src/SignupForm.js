import React, { useState } from 'react';
import './Signup.css'

const Signup =() => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('');

  const handleSignup = async () => {
    
  };

  return (
    <div className="signup-container">
        <h2>Signup</h2>
       <div className="input-group">
        <label>Username:</label>
         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
    </div>
      <div className="input-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
       </div>
      <button className="btn btn-primary" onClick={handleSignup}>Sign Up</button>
      <p className="message">{message}</p>
      </div>
  );
};

export default Signup;