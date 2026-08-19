// Q7 — Pagination: load a page at a time from PokeAPI and append each page to the
// existing list, advancing the offset and stopping once 100 items are loaded.

import { useEffect, useState } from "react";

function Pagination(){

    const [pageData, setPageData] = useState<any[]>([])
    const[err, setErr] = useState('')
    const [offset, setOffset] = useState(0)
    
    async function getData(){
        try{

            let data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
            let final_data = await data.json()
            setPageData((prev)=>[...prev, ...final_data.results])

        }catch(e){
         setErr(" error fetching the data")
        }
    }


    useEffect(()=>{
        getData()
    },[offset])

    function setTheCount(){
        setOffset((prev)=> prev + 20 )
    }


    return(
        <div>
            <p>In pagination </p>
            <ul>
                {pageData && pageData.map((ele,index)=>{
                    return(
                        <li key = {index}>
                            {ele.name}
                        </li>
                    )
                })}
            </ul>

            <button disabled = {pageData.length >= 100 ? true : false} onClick={(e) => { 
                setTheCount()
                }}>Next</button>
        </div>
    )
}

export default Pagination;