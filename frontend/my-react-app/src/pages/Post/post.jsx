import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './post.css'
import { useNavigate } from 'react-router-dom'
const Post = () => {
  const[Name,setName]=useState()
  const[username,setUserName]=useState()
  const[itemname,setItemName]=useState()
  const[description,setDescription]=useState()
  const[lostlocation,setLostLocation]=useState()
  const [postimage, setPostImage] = useState(null);
  const navigate=useNavigate()

  const submitForm=(e)=>{
    const formData = new FormData();
    formData.append('Name',Name);
    formData.append('username',username);
    formData.append('itemname', itemname);
    formData.append('description', description);
    formData.append('lostlocation', lostlocation);
    formData.append('postimage', postimage);
  e.preventDefault()
  axios.post('http://localhost:3001/post',formData)
  .then(postresult=>{console.log(postresult)
  if(postresult.data==="Success"){
    alert("Post Successfully!!")
    setName('');
    setUserName('');
    setItemName('');
        setDescription('');
        setLostLocation('');
        setPostImage(null);
        fetchPostData();
    navigate('/postanitem')
  }
})
.catch(err=>console.log(err))
  }
 

  return (
    
    <div className='block'>
        <h3>Post New Item:</h3>
      <form onSubmit={submitForm}>
        <label>Name:</label><br/>
        <input type='text' name='name' placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}/><br/>
        <label>Username:</label><br/>
        <input type='text' name='username' placeholder='Enter your username' onChange={(e)=>setUserName(e.target.value)}/><br/>
        <label>Item Name:</label><br/>
        <input type='text' name='name' placeholder='Enter item name' onChange={(e)=>setItemName(e.target.value)}/><br/>
        <label>Description:</label><br/>
        <textarea rows="6" cols="50" name='description' onChange={(e)=>setDescription(e.target.value)}> </textarea><br/>
        <label>Lost Location:</label>
        <input type='text' name='location' onChange={(e)=>setLostLocation(e.target.value)}/><br/>
        <label>Upload Image:</label>
        <input type='file' onChange={(e) => setPostImage(e.target.files[0])} /><br/>
        <button type='submit'>Submit</button>
   

       
      </form>
    </div>
  )
}

export default Post
