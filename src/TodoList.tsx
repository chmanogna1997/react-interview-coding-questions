// Q5 — Todo list: add, edit, and delete items, keeping the list in alphabetical order.

import { useState } from "react"

function TododList(){

    const [input, setInput] = useState("")
    const [data, setData] = useState<any[]>([])
    const [editFlagIndex, setEditFlagIndex] = useState(-1)
    const [editData, setEditData] = useState('')

    function addElement(){
        if(input.trim() === ''){
            return
        }
        setData((prev)=>
            {
            let newData = [...prev,input.trim()]
            newData.sort((e1,e2)=> e1.localeCompare(e2))
            return newData
        })
        setInput('')
    }

    function deleteData(eleIndex:any){
        setData((prev)=>{
            let newData  = prev.filter((data,index)=> eleIndex !== index )
            return newData
        })
    }

    function editTheData(eleIndex:any){

        console.log(" in edit the data ", eleIndex)

        setData((prev)=>{
            let newData = prev.map((ele,index) => index === eleIndex ? editData : ele )
            console.log(" the newdata is >> ", newData)
            newData.sort((a,b) => a.localeCompare(b))
            return newData
        })
        setEditFlagIndex(-1)
    }

  

    return(
        <div>
            <div>
            <input type = "text" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={() => addElement()}>ADD</button>
            </div>
            <div>
                <ul>
                    {data && data.map((ele,index)=>{
                        return(
                            <li key= {index} style={{display:"flex", justifyContent:'center', gap:'2rem', margin:'2rem'}}>
                                <p>{ele}</p>
                                <button onClick = {()=>{deleteData(index)}}>Delete</button>
                                <button onClick={()=>{setEditFlagIndex(index)}}>Edit</button>
                                {index === editFlagIndex &&
                                 <div>
                                 <input type="text" value={editData} onChange={(e)=>setEditData(e.target.value)}/>
                                 <button onClick={()=> editTheData(index)}>Ok</button>
                                 </div>
                                  }
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default TododList;