import express from 'express';
import { AzureChatOpenAI } from "@langchain/openai";
import axios from "axios";
import dotenv from "dotenv";
const app = express()

// Load environment variables
dotenv.config()

// Initialize LangChain.js 's AzureChatOpenAI
const chat = new AzureChatOpenAI({
    model: "gpt-4o",
    temperature: 0,
    maxTokens: undefined,
    maxRetries: 2,
    azureOpenAIApiKey: process.env.AZURE_OPENAI_API_KEY, // In Node.js defaults to process.env.AZURE_OPENAI_API_KEY
    azureOpenAIApiInstanceName: process.env.AZURE_OPENAI_API_INSTANCE_NAME, // In Node.js defaults to process.env.AZURE_OPENAI_API_INSTANCE_NAME
    azureOpenAIApiDeploymentName: process.env.AZURE_OPENAI_API_DEPLOYMENT_NAME, // In Node.js defaults to process.env.AZURE_OPENAI_API_DEPLOYMENT_NAME
    azureOpenAIApiVersion: process.env.AZURE_OPENAI_API_VERSION, // In Node.js defaults to process.env.AZURE_OPENAI_API_VERSION
})

interface Message {
    role: "system" | "user" | "assisstant";
    content: string;
}

class ChatBot {
    private messages: Message[];

    constructor(prompt: string) {
        this.messages = [{
            role: "system",
            content: prompt
        }]
    };

    async call(message: string): Promise<string> {
        this.messages.push({
            role: "user",
            content: message
        })      
        const result = await chat.call(this.messages);

    }
}


const handleQuery = (query, maxTurns = 5) => {
    const bot = ChatBot(prompt)
}

app.post('/chat', async (req, res) => {
    const {query} = req.body

    if (!query) {
        return res.status(400).json({
            error: "The query field is required"
        })
    }

    try {
        const result = await handleQuery(query)
        res.json({
            result
        })
    } catch (error) {
        console.error("Error handling query: ", error)
        res.status(500).json({
            error: "Something wrong while processing your request"
        })
    }
})

const PORT = 3003

app.listen(PORT, () => {
    console.log(`Server running on local host at port ${PORT}`)
})

