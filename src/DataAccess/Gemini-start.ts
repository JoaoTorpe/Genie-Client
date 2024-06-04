
import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY)

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});


 async function run() {
    const prompt = "Diga o nome de 2 animais mamiferos, apenas"
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
  
    console.log(text);
  }

export default run
 