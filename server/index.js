import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { connectDB } from './config/db.js'
import { apiRouter } from './routes/index.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()
const port = 3000

connectDB()

app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin:process.env.CLIENT_URL, credentials:true, methods:["GET","POST","PUT","DELETE","OPTIONS"] }))

app.get('/', (req, res) => {
  res.send('Hello World. My grocery app!')
})

app.use("/api", apiRouter)

app.all(/.*/, (req, res, next) => {
  res.status(404).json({ message: "endpoint does not exist" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
