import {
  ReactNode,
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";
import { Message } from "../types/Message";
import { chatReducer } from "@/reducers/ChatReducer";

type ChatContext = {
  messages: Message[];
  addMessage: (user: string, text: string) => void;
};

const ChatContext = createContext<ChatContext | null>(null);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [messages, dispatch] = useReducer(chatReducer, []);

  const addMessage = (user: string, text: string) => {
    dispatch({ type: "add", payload: { user, text } });
  };

  return (
    <ChatContext.Provider value={{ messages, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
