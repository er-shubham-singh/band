import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { app } from './src/app.js'
import { connectDb } from './src/config/connectDb.js'
dotenv.config()

const PORT = process.env.PORT
connectDb()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server running on : ${PORT}`)
    })
})
.catch((err)=>{
    console.log("MOngoose Error", err)
})