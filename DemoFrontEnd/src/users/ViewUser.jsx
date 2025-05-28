import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const ViewUser = () => {
    const [user,setUser]=useState({});  // luư trang thái đối tượng
    const { id }=useParams(); // lấy id 
    useEffect(()=>{
        loadUser();
    },[])
    const loadUser=async ()=>{
        try{
           const result= await axios.get(`http://localhost:8080/user/${id}`)
            setUser(result.data)
            console.log(result.data)
        }catch(error){
            console.error("loi",error)
        }
    }
  return (
    <div className='container py-4'>
        <h2>User Information</h2>
        <ul className="list-group w-50">
        <li className="list-group-item"><strong>ID:</strong> {user.id}</li>
        <li className="list-group-item"><strong>Username:</strong> {user.username}</li>
        <li className="list-group-item"><strong>Name:</strong> {user.name}</li>
        <li className="list-group-item"><strong>Email:</strong> {user.email}</li>
      </ul>
        <Link className="btn btn-primary mt-3" to="/">Back</Link>
    </div>
  )
}

export default ViewUser 