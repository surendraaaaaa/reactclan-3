import React, { useState } from 'react'

 function IfElse(){

 const{isloggedin,message}=useState(true)

 if(isloggedin){
    return(
        <div>
            <h1>Welcome</h1>
        </div>
    )
 } else{
    return(
        <div>
            <h1>Please Login</h1>
        </div>
    )
 }
  
}

export default IfElse;