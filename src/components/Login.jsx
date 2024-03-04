import React, { useEffect }  from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate =useNavigate();
    // console.log(navigate)

    const login=()=>{
    localStorage.setItem("login",true)

    }
    useEffect(()=>{
        let login= localStorage.getItem("login")
        if(login){
            navigate("/")
        }
    })
  return (
    <div className='Login'>
        <form action="" className='Login' >
            <input type="text" placeholder='praveen@gmail.com' /> <br></br>
            <input type="password"   />
            <button onClick={login}>login</button>
        </form>
      
    </div>
  )
}

export default Login
