import React from 'react'
import {useParams} from "react-router-dom"
const User = () => {

    const params = useParams("");
    const {country} =params ;
    console.log(country);
  
  return (
    <div>
        <div className="country">
        <h2>User is from {country}</h2>
        </div>
    
    </div>
  )
}

export default User
