import { useEffect, useState } from "react";

function AutoComplete(){


    // https://openlibrary.org/search.json?q=harry&limit=10

    const [input, setInput] = useState('')
    const [error, setError] = useState('')
    const [data, setData] = useState<any[]>([])
    // const [searchTerm, setSearchTerm] = useState('')

    function updateInput(e:any){
        setInput(e.target.value)
    }

    

    async function getSuggestions(input:string){
        let searchTerm = input.trim()

        if(searchTerm == ""){
            setData([])
            return
        }
        try{
            setError('')
        let initalData = await fetch(`https://openlibrary.org/search.json?q=${searchTerm}&limit=10`)
        let data = await initalData.json()

        console.log(" the datat is >>> ", data.docs )
        setData(data.docs)

        }
        catch(error){
            console.log(" error is >> ", error )
            setError("error fetching the auto suggestions")
        }
    }

    useEffect(()=>{

        const timer = setTimeout(() => {
            getSuggestions(input)
        }, 300);

        return()=>{
            clearTimeout(timer)
        }

    },[input])

    return(
        <div>
         <h1>In auto AutoComplete</h1>

         <div>
            <input type = 'text' value={input} onChange={(e)=>{updateInput(e)}}/>
         </div>

         <ul>
            {data && data.map((ele, index)=>{
                return(
                    <li key = {index}>
                        {/* {JSON.stringify(ele)} */}
                        {/* <p>{ele.author_name}</p> */}
                        <p>{ele.title}</p>
                    </li>
                )
            })}
         </ul>

         {error && <div>
            <p>Error is ::: {error}</p>
         </div>}
         
        </div>
    )
}

export default AutoComplete;