import React, {useState} from "react";
import { Link ,NavLink} from "react-router-dom";

import "./style.css"
function Navbar() {
  const[menuOpen,setMenuOpen]=useState(false)
  return (

    <nav>
        <Link to="/" className="title"><img src={`https://logo.com/image-cdn/images/kts928pd/production/0cfbc2e648f5603c2e72da59b5de71530dadf1c4-500x375.webp?w=640&q=72`} alt="" /></Link>
        <div className="menu" onClick={()=>{
          setMenuOpen(!menuOpen);
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      <ul className={menuOpen ? "Open":""}>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        <li>
          <NavLink to="/services">services</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/Feach">Feach</NavLink>
        </li>
        <li>
          <NavLink to="/user/indian">Indian</NavLink>
        </li>
        <li>
          <NavLink to="/user/usa">usa</NavLink>
        </li>
        <li>
          <NavLink to="/Filter">Filter</NavLink>
        </li>
        <li>
          <NavLink to ="/Urlfilter" >URLupdate</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;
