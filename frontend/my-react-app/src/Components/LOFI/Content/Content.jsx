import React from 'react'
import './Content.css'

const Content = () => {
  return (
    <div className='container'>
       <div className="left">
        <div className="text">
        <h3>Have you lost something?</h3>
        <div className="round">
            <h1>A user-friendly platform</h1>
            <div className="inner-round">
  <i class="fa-solid fa-arrow-up-right-from-square" style={{color: "#000000"}}></i>
            </div>
        </div>
        </div>
       </div>
       <div className="midtxt">
       <h2>How can we help<br/>you?</h2>
       <p> simple and user-friendly design,<br/>streamlining the process of retrieving<br/>lost items. </p>
        <button>Discover</button>
       </div>
       <div className="container-2">
        <h1>How it works?</h1>
        <div className="elem">
        <h2>Reporting Lost Items:</h2>
        <p>Contact Information: Include a form where users can provide their contact information, a description of the lost item, and any relevant details.
      Date and Location: Ask users to specify when and where the item was lost. This will help in categorizing and searching for the item later.</p>
        </div>
        <div className="elem">
        <h2>Searching for Found Items:</h2>
      <p>Item Categories: Allow users to browse or search for found items based on categories (e.g., electronics, accessories, clothing).
        Detailed Descriptions: Include detailed descriptions of found items, including photos, to help users identify their belongings.</p>
        </div>
        <div className="elem">
        <h2>Comparison with Traditional Methods:</h2>
     <p>Compare your digital lost and found service with traditional methods (like physical lost and found offices). Highlight the efficiency, convenience, and speed of your online platform compared to the traditional approach.</p>
        </div>
       </div>
       <div className="footer">
        <div className="footer-col">
          <h1>logo</h1>
          <div className="list-1">
            <ul>
              <li className='bold-1'>COMMUNITY</li>
              <li>About</li>
              <li>Submit on issue</li>
              <li>Stack</li>
            </ul>
          </div>
          <div className="list-2">
           <ul>
            <li className='bold-2'>GETTING STARTED</li>
           <li>Introduction</li>
            <li>Documentation</li>
            <li>Usage</li>
           </ul>
          </div>
          <div className="list-3">
            <ul>
              <li className='bold-3'>RESOURCES</li>
              <li>API</li>
              <li>Accessibility</li>
              <li>Community</li> 
            </ul>
          </div>
          <div className="social-links">
            <div className="icon-1">
<i class="fa-brands fa-twitter" style={{color: "black"}}></i>
            </div>
            <div className="icon-2">
            <i class="fa-brands fa-instagram" style={{color: "black"}}></i>
            </div>
            <div className="icon-3">
            <i class="fa-brands fa-facebook" style={{color: "black"}}></i>
            </div>
            <div className="icon-4">
            <i class="fa-brands fa-whatsapp"  style={{color: "black"}}></i>
            </div>
          </div>
        </div>
        <div className="outer">
          <p>2024 LOFI,All-right reserved @shaziya shaikh</p>
        </div>
       </div>
   </div>
   
  )
}

export default Content
