import React, { useState } from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup =() => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('');

  const handleSignup = async () => {
    if(!username || !password){
        setMessage("fill all the fields!");
        return;
    }
    else setMessage("sigining up ...")
    try{
    const res = await axios.post("http://localhost:4000/signup",{
        username,
        password
    });
    setMessage(res.data.message)
    }
    catch(err){
        setMessage("error occured!")
    }
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
      <div className="signup-link">
        <p>Already registered? <Link style={{textDecoration:"none"}} to="/"> Login </Link>  now!</p>
      </div>
      </div>
  );
};

export default Signup;
