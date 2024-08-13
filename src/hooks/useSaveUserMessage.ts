const UseSaveUserMessage = (
  messages: any,
  userMessage: string,
  setMessages: React.Dispatch<React.SetStateAction<any>>
) => {
  setMessages((current) => [
    ...current,
    { message: userMessage, sender: "user" },
  ]);
};

export default UseSaveUserMessage;
