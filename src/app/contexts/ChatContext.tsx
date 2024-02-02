import { ReactNode, createContext, useContext, useState } from "react";
import { Message } from "../types/Message";

type ChatContext = {
  messages: Message[];
  addMessage: (user: string, text: string) => void;
};

const ChatContext = createContext<ChatContext | null>(null);

const ChatProvider = ({ children }: { children: ReactNode }) => {

  return <ChatContext.Provider value={}>{children}</ChatContext.Provider>;
};

export const useChat = () => useContext(ChatContext);
