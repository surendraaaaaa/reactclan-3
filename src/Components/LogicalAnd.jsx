import React from 'react'

 function LogicalAnd() {
  const password=true;
  return (
    <div>{password&&<h1>login successful</h1>}</div>
  )
}
export default LogicalAnd;