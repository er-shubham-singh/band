import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectDb = async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)
        console.log(`MongoDB connected sucessfully : ${process.env.MONGO_URI}/${process.env.DB_NAME}`)
    } catch (err){
        console.error("Mongodb connectFailed : ", err)
        process.exit()
    }
}

export {connectDb}