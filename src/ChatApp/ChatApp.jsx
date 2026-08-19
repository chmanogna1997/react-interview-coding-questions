// Q6 — Chat UI: takes messages in arbitrary order, groups them by day, and renders
// oldest day first with each day's messages sorted oldest to newest.

import { useEffect, useState} from 'react';
import {chatData} from './ChatData';

function ChatApp(){

    const [chat, setChat] = useState([])


    // Group messages into { 0: [...], 1: [...] } keyed by how many days ago they were sent,
    // with each day's array sorted oldest to newest.

    function flattenData(){
       
        let out = {}
        for(let data of chatData.messages){
            let difference = new Date() - new Date(data.createdAt) 
            let daysAgo = Math.floor(difference/(1000 * 60 * 60 * 24))

            if(!out[daysAgo]){
                out[daysAgo] = []
            }
             out[daysAgo].push(data)
             out[daysAgo].sort((a,b)=> new Date(a.createdAt) - new Date(b.createdAt))
        }
        return out
    }

    useEffect(()=>{
        // Highest daysAgo first, so the oldest day renders at the top.
        let output =  Object.entries(flattenData()).sort((a,b) => b[0]-a[0])
        setChat(output)
    },[])



    return(
        <div>
            In chat App
            {chat && chat.map((data)=>{
                let days = data[0]
                let actualChat = data[1]
                return(
                    <div key={days}>
                        <div> Days : {days} </div>
                        <ul>
                            {actualChat && actualChat.map((ele,index) => {
                                return(
                                    <li key = {ele.id}>
                                        {ele.text}
                                    </li>
                                )
                            })}

                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default ChatApp