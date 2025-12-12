"use client"

import axios from "axios"
import {useEffect, useRef, useState } from "react"

interface response { 
     status:any,
     headers:any,
     body:any,
     statusText:any
}

interface PostApi { 
    status:number,
    headers:any,
    body:any,
    statuText:any
}

export default function Gui(){
   const methodRef = useRef<HTMLSelectElement | null>(null)
   const urlRef = useRef<HTMLInputElement>(null)
   const bodyRef = useRef<HTMLInputElement>(null)
   const headerRef = useRef<HTMLInputElement>(null)
   const [res ,Setres] = useState<response>()
   const [post,Setpost] = useState<PostApi>()
   

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
        const Request = await axios.post("http://localhost:3001/api/v1/request/get",{
            url:urlRef.current?.value
        })
        Setres(Request.data)
        return Request
    }

    async function PostHandler(){
        if(!urlRef.current?.value){
            return
        }
        const url = urlRef.current.value
        const body = bodyRef.current?.value
        const headers = headerRef.current?.value

        const Request = await axios.post("http://localhost:3001/api/v1/request/post",{
            url:url,
            body:body,
            headers:headers
        })
        console.log(Request.data,"data from backend")
        Setpost(Request.data)
        
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
            <div>
                <input ref={headerRef} className="bg-white text-black border-none"placeholder="headears" />
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
            <div>
                {post?.body}
                {post?.headers && 
                    Object.entries(post.headers).map(([key , value]) => (
                        <div key={key}>
                            <span>{key}</span>
                            <span>{JSON.stringify(value)}</span>
                        </div>
                    ))
                }
                {post?.status}
            </div>
        </div>
    )
}