import React from 'react'
import {useEffect,useState} from 'react'

export default function UseEFFect() {

    const[count,setCount]=useState(0)

    useEffect(()=>{
        console.log("count:",count);
        
    },[count])

   

  return (
    <div>
           <h1>count":,{count}</h1>
           <button onClick={()=>{
            setCount(count+1)
           }}>Increment</button>
    </div>
  )
}
