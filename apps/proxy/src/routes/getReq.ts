import express, { Router ,Request,Response} from 'express'
import axios from 'axios'
const getEnd:Router = Router()

getEnd.post('/request/get',async (req:Request,res:Response) =>{
    try{
    const methord = req.body.methord
    const url = req.body.url
    const body = req.body.body 
    
    let responsetext = {};
    
    const Request = await axios.get(url,{
        data:body
    })
    responsetext =Request.data
    await axios.post('http://localhost:3000/gui',responsetext) 
    console.log(responsetext,"response from proxy server")
    return res.status(200).json({msg:"response"})

    }
    catch(err){
        console.log(err)
        return res.status(500).json({msg:"server error"})
    }
})


getEnd.get('/test',(req,res) =>{
    res.send("hai tested succefylly")
    return res.status(200).json({msg:"tested"})
})
export default getEnd;