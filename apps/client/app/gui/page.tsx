"use client"

import axios, { AxiosResponse } from "axios"
import { promises } from "dns"
import { request } from "http"
import { ReactNode, useEffect, useRef, useState } from "react"

interface response { 
     status:any,
     headers:any,
     body:any,
     statusText:any
}

export default function Gui(){
   const methodRef = useRef<HTMLSelectElement | null>(null)
   const urlRef = useRef<HTMLInputElement>(null)
   const bodyRef = useRef<HTMLInputElement>(null)
   const [res ,Setres] = useState<response>()

   console.log(res?.body,"body got")
   console.log(res,"response from backend")
    async function SentReq(){
        const selectmethord = methodRef.current?.value

        if(selectmethord == "GET"){
             GetHandler()
        }
        if(selectmethord == "POST"){
            PostHandler()
        }
    }

    
    async function GetHandler(){
        if(!urlRef.current?.value){
            return
        }
        console.log(urlRef.current.value,"url value")
        const Request = await axios.post("http://localhost:3001/api/v1/request/get",{
            url:urlRef.current?.value
        })
        Setres(Request.data)
        return Request
    }

    async function PostHandler(){
        if(!urlRef.current?.value || !methodRef.current?.value || !bodyRef.current?.value){
            return
        }

        const Request = await axios.post("http://localhost:3001/api/v1/request/post",{
            url:urlRef.current.value,
            methord:methodRef.current.value,
            body:bodyRef.current.value
        })
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
                {res?.body}
                {res?.headers.data}
                {res?.status}
                {res?.statusText}
            </div>
        </div>
    )
}