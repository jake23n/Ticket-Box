import mongoose from "mongoose"
import dotenv from "dotenv"
import { ur } from "@faker-js/faker"

dotenv.config()
const url =  process.env.MONGODB_URL
const connectDB = async ()=>{
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("MongoDB Connected successfully")
    } catch(error){
        console.error("MongoDB Connection Failed", error)
        process.exit(1) // exit process with failure code
    }
}

export default connectDB