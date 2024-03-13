import React, { useState} from 'react';
import './loginsignup.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Loginsignup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    const formData = { username, password };
    try {
      const data = await fetch ('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const res=await data.json();
      console.log(res)
    
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  }

  return (
    <div className='frm-1'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>  <br/>
        <input type='text' placeholder='Enter your username' name='username' onChange={(e) => setUsername(e.target.value)} required />
        <br/>
        <label>Password:</label>  <br/>
        <input type='password' placeholder='Enter your password' name='password' onChange={(e) => setPassword(e.target.value)} />
        <br/>
        <button className='bn-1' type='submit'>Continue</button>
        <p>Not on lofi yet?</p>
        <Link to="/register" id='bn-2'>Register</Link>
      </form>
    </div>
  );
}

export default Loginsignup;
