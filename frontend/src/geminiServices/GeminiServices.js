import { GoogleGenerativeAI } from "@google/generative-ai";
export class AIService {
  genAI = new GoogleGenerativeAI("AIzaSyB4XIpwlSG5JrWAhZjbMrhZPwgjsGzKxo0");
  async run(prompt) {
    const model = this.genAI.getGenerativeModel({ model: "gemini-1.0-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  }
}

const geminiService = new AIService();
export default geminiService;
