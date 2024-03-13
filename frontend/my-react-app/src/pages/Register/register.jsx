import React, { useState } from 'react'
import './register.css'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const Loginsignup=()=>{
    const[username,setUserName]=useState();
    const[password,setPassword]=useState();
    const[confirmpassword,setConfirmPassword]=useState();
    const[email,setEmail]=useState();
    const[fullname,setFullName]=useState();
    const navigate=useNavigate()
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const formData = {
          username,
          password,
          confirmpassword,
          email,
          fullname
      };
  
      fetch('http://localhost:3001/register', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          console.log(data);
          navigate('/login');
      })
      .catch(error => {
          console.error('There was a problem with your fetch operation:', error);
      });
  }
  return(
    <div className='frm'>
     <h2>Register</h2>
     <form onSubmit={handleSubmit}>
      <label>Username:</label>  <br/>
      <input type='text' placeholder='Enter your username' name='username' onChange={(e)=>setUserName(e.target.value)}/>
      <br/>
      <label>Password:</label>  <br/>
      <input type='password' placeholder='Enter your password' name='password'onChange={(e)=>setPassword(e.target.value)}/>
<br/>
<label>Confirm password:</label>  <br/>
      <input type='password' placeholder='Enter your password' name='password'onChange={(e)=>setConfirmPassword(e.target.value)}/>
<br/>
<label>Email:</label>  <br/>
      <input type='Email' placeholder='Enter your email' name='email' onChange={(e)=>setEmail(e.target.value)}/>
      <br/>
      <label>Fullname:</label>  <br/>
      <input type='text' placeholder='Enter your fullname' name='fullname' onChange={(e)=>setFullName(e.target.value)}/><br/>
      <button className='bn-1' type='submit'>Register</button>
      <p>Already Have an Account?</p> <Link to="/login" id='bn-2'>Login</Link>
     
     </form>
    
    </div>
  )
}
export default Loginsignup