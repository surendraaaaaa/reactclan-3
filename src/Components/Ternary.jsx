import React,{useState} from 'react'

function Ternary() {
    const{isauthanticated,setisauthenticated}=useState(true);

  return (
    <button>{isauthanticated ? "logout":"login"}</button>)
}
export default Ternary;
