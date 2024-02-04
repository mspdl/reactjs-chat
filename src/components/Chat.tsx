import { useUser } from "@/app/contexts/UserContext";
import { ChatInput } from "./ChatInput";
import { useChat } from "@/app/contexts/ChatContext";
import { ChatMessage } from "./ChatMessage";

export const Chat = () => {
  const userCtx = useUser();
  const chatCtx = useChat();

  return (
    <div className="border border-white/30 rounded-md">
      <div className="h-96 p-3 overflow-y-auto">
        <div className="flex flex-col gap-1">
          {chatCtx?.messages.map((message) => (
            <ChatMessage
              key={message.id}
              authorName={message.user}
              text={message.text}
            />
          ))}
        </div>
      </div>

      <div className="border-t border-t-white/30 p-3">
        <ChatInput authorName={userCtx?.name ?? ""} />
      </div>
      <div className="border-t border-t-white/30 p-3">
        <ChatInput authorName={"bot"} />
      </div>
    </div>
  );
};
