import { BiSend } from "react-icons/bi";

export const FormChat = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

  return (
    <form
    onSubmit={handleSubmit}
    className="flex w-full p-1 gap-1">
      <input type="text" className="flex-1 p-1 rounded-md bg-zinc-800 text-white" placeholder="Digite sua mensagem" />
      <button className="text-white p-2 rounded-md hover:bg-zinc-700" type="submit">
        <BiSend />
      </button>
    </form>
  );
};



