import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import logo from './LOGO.png'

const Nav = () => {
  return (
    <div className='main'>
     <div className="logo">
     <img src={logo}/>
     </div>
     <div className="nav-menu">
        <ul>
            <li><Link style={{textDecoration:'none'}} to='/'>Home</Link></li>
            <li><Link style={{textDecoration:'none'}} to='/lostanfound'>Lost an found</Link></li>
            <li><Link style={{textDecoration:'none'}} to='/postanitem'>Post an item</Link></li>
            <li><Link style={{textDecoration:'none'}} to='/about'>About</Link></li>
        </ul>
     </div>
    <div className='right'>
    <Link to="/login"><button>Login</button></Link>
        <Avatar/>
    </div>
    </div>
  )
}

export default Nav

