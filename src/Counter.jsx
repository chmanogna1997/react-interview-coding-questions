// Q3 — Stopwatch counter: start / pause / reset a ticking count using setInterval inside an effect.

import { useEffect, useState } from "react"

function Counter(){

    const [count, setCount] = useState(0)
    const [timerFlag, setTimerFlag] = useState(false)

    function changeStatus(flag){
        setTimerFlag(flag)
    }

    function reset(){
        setTimerFlag(false)
        setCount(0)
    }

    useEffect(()=>{
        if(timerFlag){
        const timer = setInterval(()=>{
            setCount((count)=>count+1)
        },1000)
        return()=>{
            clearInterval(timer)
        }
    }
    },[timerFlag])


    
    return(
        <div>
            <h1>Counter : {count} </h1>
            <div style = { {display : "flex", gap: '1rem', justifyContent:"center"} }>
                <button onClick={()=>changeStatus(true)}> start </button>
                <button onClick={()=>changeStatus(false)}> pause </button>
                <button onClick={(e)=>{reset(e)}}> reset </button>
            </div>

        </div>
    )
}

export default Counter;