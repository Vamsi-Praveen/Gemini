import express from "express"
import { generateResponseFromModel } from "../controllers/index.js"

const AIRouter = express.Router()

AIRouter.get('/', generateResponseFromModel)

export default AIRouter