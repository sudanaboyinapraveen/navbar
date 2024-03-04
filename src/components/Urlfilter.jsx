import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import React from 'react'



const Filtersforurl = () => {

    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
      
    };
    
  
    const [SearchParamsin,setSeatchparamsin] = useSearchParams();
    console.log(SearchParamsin)


      return (
        <div className="inputtag">
            
    
            <div>
            <input type="text" onClick={handleInputChange}/>
            </div>

            <div>
            

            <button onClick={()=> setSeatchparamsin({SearchParamsin : inputValue })} >Change url </button>


            </div>
        
            <h1>the value from the input field is  {inputValue} </h1>
        </div>
    
        
      )
    }
    
    export default Filtersforurl;