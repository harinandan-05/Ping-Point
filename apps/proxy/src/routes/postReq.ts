import express, { Router , Request,Response } from 'express'
import axios from 'axios'

const postEnd:Router = Router()


postEnd.post('/request/post',async(req:Request,res:Response) =>{
    
    try{
    const {url,headers,body} = req.body
    console.log(url,headers,body,"data got from fe")
    const response = await axios.post(url,headers,body)
    if(!response){
        return res.status(400).json({msg:"failed to fetch"})
    }

    return res.json({
        headers:response.headers,
        status:response.status,
        statusText:response.statusText,
        body:response.data
    })

    }catch(err){
        return res.json({
            msg:"server error"
        })
    }
})

postEnd.post('/post/test',(req,res) => {
    return res.send("helloo")
})
export default postEnd;