import { useSearchParams } from "react-router-dom"

export default function Filter(){

        const [searchParams, setSearchParams]=useSearchParams()
        console.log(searchParams.get('age'))
        console.log(searchParams.get('color'))

        let age=searchParams.get('age')
        let color=searchParams.get('color')

        return(
                <div className="Filter">
                        <h2>This is a filter component</h2>
                        <h3>Age is {age} and favourite color is {color} .</h3>
                        

                        <button onClick={()=>{setSearchParams({age:'20'})}}>set age</button>
                        <button onClick={()=>{setSearchParams({color:'green'})}}>set color</button>
                </div>
        )
}