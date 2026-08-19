// Q4 — Flatten a nested array: recurse with Array.isArray, without using .flat().

import { useState } from "react";

function FlattenArray(){

    const [input, setInput] = useState('')
    const [out, setOut] = useState('')

    function flatten(data){
     
        let result = []


        for(const item of data){
            console.log(" the item is >>>>>>> ", item )
            if(Array.isArray(item)){
                result.push(...flatten(item))
            }
            else{
            result.push(item)
            }
        }

        console.log(" the result is >>> ", result)

        return result
     
    }

    function getFlattenArr(){

        let output = flatten(JSON.parse(input))
        setOut(output)
    }


    return(
        <div>
            <input type='text' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
            <button onClick = {()=>getFlattenArr()}> enter </button>
            <div>
                <p>outPut is ::: {out}</p>
            </div>

        </div>
    )
}

export default FlattenArray;