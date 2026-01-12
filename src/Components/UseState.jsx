import React,{useState} from "react";

function UseState(){

  const[count,setcount]=useState("love");

  const increment=()=>{
    setcount("divya");
  }

  const decrement=()=>{
    setcount("surendra");
  }

  const reset=()=>{
    setcount("love");
  }

    return(
        <div className="flex space-x-45 center">
               <h1>{count}</h1>
               <button onClick={increment}>+</button>
               <button onClick={decrement}>-</button>
               <button onClick={reset}>Reset</button>
        </div>
    )
}

export default UseState;

