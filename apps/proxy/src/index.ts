import express from 'express'
import {prismaClient} from '@repo/database/client'
import cors from 'cors'
import getEnd from './routes/getReq'
const app = express()

app.use(express.json())
app.use(cors())
app.use("/api/v1",getEnd)

app.listen(3001,() =>{
    console.log("proxy up running")
})

