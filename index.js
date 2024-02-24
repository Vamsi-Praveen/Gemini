import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import 'dotenv/config'
import AIRouter from "./routes/index.js"

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.use('/gemini', AIRouter);

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})