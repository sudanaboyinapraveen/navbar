import React, { useEffect } from 'react'

import {  useNavigate } from 'react-router-dom'

const Protected = (props) => {
    const {Component}=props;
   const navigate =useNavigate("")
    useEffect(()=>{
        let login=localStorage.getItem("login")
        if(!login){
            navigate("/login")
        }
    })
  return (
    <div>
        {/* <h1>this is Protected page</h1> */}
        <Component/>
    </div>
  )
}

export default Protected
