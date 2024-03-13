import React from 'react'
import "./postanitem.css"
import axios from 'axios';
import { useState,useEffect } from 'react';
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Post = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {

    fetchData();
  }, []);

  const fetchData = () => {
 
    axios.get('http://localhost:3001/posts')
      .then(response => {
        // Set the fetched data to state
        setPostData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  return (
    <div className='contain'>
     <div className='post'>
      <Link to='/post'><FaPlus className='p-icon' /></Link>
     </div>
     <div className='post-list'>
        <h2>Posted Items:</h2>
        <ul>
          {postData.map((post, index) => (
            <li key={index}>
              <h3>{post.Name}</h3>
              <h3>{post.username}</h3>
              <h3>{post.itemname}</h3>
              <p>{post.description}</p>
              <p>Lost Location: {post.lostlocation}</p>
              {post.postimage && <img src={post.postimage} alt="Post Image" />}
              {/* Display other relevant data */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Post

