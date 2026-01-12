import React, { useState } from 'react';

function ReactEvents() {

    const[count,setCount]=useState(0);


     const event=function Click(){
        alert("surendra loves divya");

     }

   const para=(name)=>{
           alert(`surendra ${name}`); 
  
    }

    const obj=(e)=>{
      console.log(e);
      console.log(e.target);
      console.log(e.target.value);
    }
    const index=(e)=>{
      console.log(e.target.value);
    }
    const ind=(e)=>{
      alert("form submitted😁😁")
    }
    const key=(e)=>{
      console.log(e.key);
      
    }

    const keydown=(e)=>{
      console.log("key:",e.key);
      console.log("value:",e.target.value);
         
    }

  return (
    <div>
        <h1 onClick={event}>love</h1>
        <button onClick={()=>{
          alert("surendra")
        }}>click me</button>
        <button onClick={()=>{
          setCount(count+1)
        }}>+ {count}</button>

     <h1 onClick={()=>{
      para("divya");
     }}>parameter</h1>


     <button onClick={obj}>click me</button>
     <input type="text" onChange={index} className='border-2' />
     <form onSubmit={ind}>
      <button type='submit'>clickme</button>
     </form>
     <input type="text" onKeyDown={keydown} className='border-2' />
    </div>
  )
}
 export default ReactEvents;