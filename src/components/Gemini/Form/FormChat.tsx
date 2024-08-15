import UseAskAI from "@/hooks/useAskAI";
import UseSaveUserMessage from "@/hooks/useSaveUserMessage";
import { BiSend } from "react-icons/bi";

export const FormChat = ({ message, setMessages }: any) => {


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    UseSaveUserMessage(message, e.target?.[0].value, setMessages);
    await UseAskAI(e.target?.[0].value, setMessages)
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full p-1 gap-1">
      <input
        type="text"
        className="flex-1 p-1 rounded-md bg-zinc-800 text-white"
        placeholder="Digite sua mensagem"
      />
      <button
        className="text-white p-2 rounded-md hover:bg-zinc-700"
        type="submit"
      >
        <BiSend />
      </button>
    </form>
  );
};
