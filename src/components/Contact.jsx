import React from 'react'
import {Link, NavLink, Outlet,useLocation} from "react-router-dom"
const Contact = () => {
    let location = useLocation()
    console.log(location)

  return (
    <div>
      <h2>branch</h2>

      <nav>
        <Link to="/" className='title'>branch</Link>
        <ul>
            <li>
            <NavLink to="Bengaluru" state={{name:"karthik"}}>Bengaluru</NavLink>
            </li>
            <li>
            <NavLink to="Dehli" state={{name:"praveen"}}>Dehli</NavLink>
            </li>
        </ul>
      </nav>
  
 
      <Outlet/>
    </div>
  )
}

export default Contact;
