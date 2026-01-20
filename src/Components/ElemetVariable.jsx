import React from 'react'

function ElemetVariable() {
    const Password=true;
    let message;

    if(Password){
        message=<h1>login success</h1>
    } else{
        message=<h1>Login Failed</h1>
    }

  return (
    <div>{message}</div>
  )
}

export default ElemetVariable;