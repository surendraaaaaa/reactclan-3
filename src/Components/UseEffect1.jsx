import React from 'react'
import { useEffect,useState } from 'react'

export default function UseEffect1() {

 const[users,setUsers]=useState([])

 useEffect(()=>{
    fetch("https://dummyjson.com/users")
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data);
        console.log(data.users);
        setUsers(data.users)
        
    })
 },[])

  return (
    <div>
        <h1>users</h1>
        {users.map((user)=>{
           return <p key={user.id}>{user.firstName}</p>
        })}
    </div>
  )
}
