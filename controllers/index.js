import { GoogleGenerativeAI } from "@google/generative-ai"
import { geminiAI } from "../config/aiConfig.js"

export const generateResponseFromModel = async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt) {
            return res.status(400).send({ "Error": 'Please Provide Prompt Data' })
        }
        const model = new GoogleGenerativeAI(geminiAI.apiKey);
        const genAI = model.getGenerativeModel({ model: geminiAI.textModel });

        const result = (await genAI.generateContent(prompt)).response;
        const output = result.text();

        return res.send(output).status(200);

    }
    catch (err) {
        console.log(err)
        return res.status(500).send({ message: 'Internal Server Error', error: err })
    }
}