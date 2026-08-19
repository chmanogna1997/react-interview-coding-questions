import { useEffect, useState } from "react";

function DebounceText(){

    const [input,setInput] = useState("")
    const [debounceValue, setDebounceValue] = useState("")

    function updateInputText(e){
        setInput(e.target.value)
    }

    function debounce(val){
        let value = val.trim()
        setDebounceValue(value) 
    }


    useEffect(()=>{
        const timer = setTimeout(()=>{
            debounce(input)
        },500)
        return(()=>{
            clearTimeout(timer)
        })
    },[input])

    return(
        <div>
            <input type="text" value={input} onChange={(e)=>{updateInputText(e)}} />
            <div>
                <p>Input Text is </p>
                <p>{input}</p>
            </div>
            <div>
                <p>debounce Input is.... </p>
                <p>{debounceValue}</p>
            </div>
        </div>
    )
}

export default DebounceText;