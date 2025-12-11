import express, { Router ,Request,Response} from 'express'
import axios from 'axios'
const getEnd:Router = Router()

getEnd.post('/request/get',async (req:Request,res:Response) =>{
    try{
    const url = req.body.url
    console.log(url,"url reccived")

    const response = await axios.get(url)
    // console.log(response.data,"data got back data")
    // console.log(response.headers,"data got back headers")
    // console.log(response.status,"data got back status")
    // console.log(response.data.body,"data got back data.body")
    return res.json({
        status:response.status,
        headers:response.headers,
        body:response.data.body,
        statusText:response.statusText
    })
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
         msg:"server error"
        })
    }
})


getEnd.get('/test',(req,res) =>{
    res.send("hai tested succefylly")
    return res.status(200).json({msg:"tested"})
})
export default getEnd;