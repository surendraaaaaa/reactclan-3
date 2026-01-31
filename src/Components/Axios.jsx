import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'

export default function Axios(){
   const[users,setUsers]=useState([])
   useEffect(()=>{
    axios.get("https://dummyjson.com/users")
    .then((response)=>{
        console.log(response.data);
        console.log(response.data.users); 
        
        setUsers(response.data.users)

        })
   
   },[])

     return(
        <div>
            <h1>users</h1>
            {users.map((user)=>{
               return <p key={user.id}>{user.firstName}</p>
            })}
        </div>
     )
}

