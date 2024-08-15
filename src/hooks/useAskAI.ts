import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const UseAskAI = async (
  userMessage: string,
  setMessages: any
) => {
  try {
    const prompt = userMessage;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setMessages((current: any) => [...current, { message: text, sender: "ai" }]);
    console.log(text);
    
    
  } catch (error) {
    alert("Error: " + error);
  }
};



export default UseAskAI