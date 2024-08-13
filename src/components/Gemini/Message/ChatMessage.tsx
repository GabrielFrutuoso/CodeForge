import Markdown from "react-markdown";
import { MessageCompProps } from "./types";
import { baseStyles } from "./styles";


export const ChatMessage = (message: MessageCompProps) => {
  return (
    <div
      className={baseStyles({ sender: message.sender as any })}
    >
      <Markdown>{message.message}</Markdown>
    </div>
  );
};