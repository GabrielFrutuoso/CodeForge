const UseSaveUserMessage = (
    messages: any,
    userMessage: string,
    setMessages: React.Dispatch<React.SetStateAction<any>>
) => {
    messages.push({ message: userMessage, sender: "user" });
    setMessages([...messages]);
};

export default UseSaveUserMessage;