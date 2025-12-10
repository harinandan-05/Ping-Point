import express, { Router , Request,Response } from 'express'
import axios from 'axios'

const postEnd:Router = Router()


postEnd.post('/request/post',async(req:Request,res:Response) =>{
    const urlinfo = req.body.url;
    const methord = req.body.methord;
    const body = req.body.body;

    const response = await axios.post(urlinfo,body)
    if(!response){
        return res.status(400).json({msg:"failed to fetch"})
    }

})


export default postEnd;