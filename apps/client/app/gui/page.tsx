"use client"

import axios from "axios"
import { useRef } from "react"

export default function Gui(){
   const methodRef = useRef<HTMLSelectElement | null>(null)
   const urlRef = useRef<HTMLInputElement>(null)
   const bodyRef = useRef<HTMLInputElement>(null)

    async function SentReq(){
        const selectmethord = methodRef.current?.value
        const urlInfo = urlRef.current?.value
        const bodyInfo = bodyRef.current?.value 

        if(selectmethord == "GET"){
            const request = await axios.post('http://localhost:3001/api/v1/request/get',{
            methord :selectmethord,
            url: urlInfo,
            body:bodyInfo
        })
        
        return request

        }

        if(selectmethord == "POST"){
            const request = await axios.post('http://localhost:3001/api/v1/request/post',{
            methord :selectmethord,
            url: urlInfo,
            body:bodyInfo
        })
        
        return request
        }

    
    }

    return (
        <div>
            <div className="flex ml-100 mt-20">
                <input ref={urlRef}  placeholder="enter the url" className="bg-white text-black"></input>
            </div>
            <div className="flex ml-150 ">
                <select className="cursor-pointer"ref={methodRef}>
                <option>GET</option>
                <option>POST</option>
                <option>PUT</option>
            </select>
            </div>
            <div className="flex ml-100">
                <input ref={bodyRef} className="bg-white text-black border-none"placeholder="body" />
            </div>
            <div className="flex ml-100">
                <button className="bg-white rounded-sm text-black mt-4 w-50 cursor-pointer"onClick={SentReq}>sent request</button>
            </div>
            
        </div>
    )
}