import { ResizablePanel } from '../ui/resizable';
import { ChatMessage } from './Message/ChatMessage';
import { FormChat } from './Form/FormChat';
import { SiGooglegemini } from 'react-icons/si';

const Gemini = () => {
  return (
    <ResizablePanel className=" flex flex-col" minSize={4} defaultSize={4}>
    <h1 className="text-xl font-bold text-neutral-300 flex p-2"><SiGooglegemini size={24} /></h1>
    <div className="flex flex-col h-[95%]">
      <div className="flex flex-col flex-1 gap-6 px-4 py-1 pb-20 overflow-y-auto">
        <ChatMessage message="Olá, tudo bem?" sender="ai" />
        <ChatMessage message="Olá, tudo bem?" sender="user" />
        <ChatMessage message="Olá, tudo bem?" sender="ai" />
        <ChatMessage message="Olá, tudo bem?" sender="user" />
        <ChatMessage message="Olá, tudo bem?" sender="ai" />
        <ChatMessage message="Olá, tudo bem?" sender="user" />
        <ChatMessage message="Olá, tudo bem?" sender="ai" />
        <ChatMessage message="Olá, tudo bem?" sender="user" />
        <ChatMessage message="Olá, tudo bem?" sender="ai" />
        <ChatMessage message="Olá, tudo bem?" sender="user" />
        <ChatMessage message="Olá, tudo bem?" sender="ai" />
        <ChatMessage message="Olá, tudo bem?" sender="user" />
        <ChatMessage message="Olá, tudo bem?" sender="ai" />
        <ChatMessage message="Olá, tudo bem?" sender="user" />
        <ChatMessage message="Olá, tudo bem?" sender="ai" />
        <ChatMessage message="Olá, tudo bem?" sender="user" />
      </div>
      <FormChat />
    </div>
  </ResizablePanel>
  );
};

export default Gemini;
