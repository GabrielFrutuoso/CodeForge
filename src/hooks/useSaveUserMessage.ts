const UseSaveUserMessage = (
  userMessage: string,
  setMessages: React.Dispatch<React.SetStateAction<any>>
) => {
  setMessages((current: any) => [
    ...current,
    { message: userMessage, sender: "user" },
  ]);
};

export default UseSaveUserMessage;
