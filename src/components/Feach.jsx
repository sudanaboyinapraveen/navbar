import React, { useEffect, useState } from 'react'

const Feach = () => {

const [product,setProduct] = useState([]);

const getData = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const resData = await res.json();
    setProduct(resData)
    console.log(resData)
}
useEffect(()=>{
    getData();
},[])


  return (
    <div>
      
      {
        product.map((item,i)=>{
          return(
            <div className="feach" key={i}>
             <h1>Email:{item.email}</h1>
            </div>
          )
        })
      }
    </div>
  )
}

export default Feach
