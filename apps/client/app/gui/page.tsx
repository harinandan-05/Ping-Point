"use client"

import axios, { AxiosResponse } from "axios"
import { ReactNode, useRef, useState } from "react"

export default function Gui(){
   const methodRef = useRef<HTMLSelectElement | null>(null)
   const urlRef = useRef<HTMLInputElement>(null)
   const bodyRef = useRef<HTMLInputElement>(null)
   const [Res,SetRes] = useState<AxiosResponse | null>()

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
            const GetReuqest = await axios.get("http://localhost:3001/api/v1/request/get")
            SetRes(GetReuqest)
            console.log(Res,"response from backend to fe")
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
            <div>
                {Res}
            </div>
            
        </div>
    )
}