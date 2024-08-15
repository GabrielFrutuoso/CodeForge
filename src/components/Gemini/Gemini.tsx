import { ResizablePanel } from '../ui/resizable';
import { ChatMessage } from './Message/ChatMessage';
import { FormChat } from './Form/FormChat';
import { SiGooglegemini } from 'react-icons/si';
import { useState } from 'react';

const Gemini = () => {

  const [messages, setMessages] = useState([
    { message: "Olá, tudo bem?", sender: "ai" },
  ]);

  console.log(messages)

  return (
    <ResizablePanel className=" flex flex-col" minSize={4} defaultSize={4}>
    <h1 title='Gemini' className="text-xl font-bold text-neutral-300 flex items-center p-2"><SiGooglegemini size={24} /> Gemini</h1>
    <div className="flex flex-col h-[95%]">
      <div className="flex flex-col flex-1 gap-6 px-4 py-1 overflow-y-auto">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.message}
            sender={message.sender}
          />
        ))}
      </div>
      <FormChat messages={messages} setMessages={setMessages} />
    </div>
  </ResizablePanel>
  );
};

export default Gemini;
