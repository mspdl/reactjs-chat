import { useChat } from "@/app/contexts/ChatContext";
import { useState } from "react";

type ChatInputProps = {
  authorName: string;
};

export const ChatInput = ({ authorName }: ChatInputProps) => {
  const chatCtx = useChat();
  const [textInput, setTextInput] = useState("");

  const handleKeyUpAction = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code.toLowerCase() === "enter") {
      sendMessage();
    }
  };

  const handleButtonClick = () => {
    sendMessage();
  };

  const isMessageValid = () => {
    return textInput.trim() !== "";
  };

  const sendMessage = () => {
    if (isMessageValid()) {
      chatCtx?.addMessage(authorName, textInput.trim());
    }
    setTextInput("");
  };

  return (
    <div className="flex">
      {textInput && (
        <p className="text-xs relative w-0 top-[-10px] text-gray-500">
          {authorName}
        </p>
      )}
      <input
        className="w-full bg-transparent text-md outline-none text-white"
        placeholder={`${authorName} - type a message (and press enter to send)`}
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        onKeyUp={handleKeyUpAction}
      />
      {isMessageValid() && (
        <button
          onClick={handleButtonClick}
          className="text-sm border border-white rounded-md p-1 bg-blue-600 hover:bg-blue-800"
        >
          Send
        </button>
      )}
    </div>
  );
};
