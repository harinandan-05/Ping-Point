import express from 'express'
import {prismaClient} from '@repo/database/client'

const app = express()

app.listen(3001,() =>{
    console.log("proxy up running")
})

