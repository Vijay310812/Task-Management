import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173/'
}))

mongoose.connect(process.env.MONGODB_CONN).then(()=>{
    console.log("Database Connected.")
}).catch(err => console.log("Database Connection Failed.",err))

app.listen(PORT, ()=>{
    console.log('Server is running on port:', PORT)
})