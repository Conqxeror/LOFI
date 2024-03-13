import { useEffect } from 'react';
import avatar from './avatar.png'
import './Profile.css'
const Profile=()=>{

    useEffect(() => {
        const profileValid = async () => {
       
            let token = localStorage.getItem("usersdatatoken");
            // console.log(token);
         
            const res=await fetch('/validuser',{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            const data =await res.json();
            console.log(data)
        }
        profileValid();
    }, []);
    return(
        <div className='profile'>
          <img src={avatar}/>
          <h1>User Email:shaikhshaziya2828@gmail.com</h1>
        </div>
    )
}
export default Profile