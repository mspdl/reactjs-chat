import { useUser } from "@/app/contexts/UserContext";
import { ChatInput } from "./ChatInput";

export const Chat = () => {
  const userCtx = useUser();

  return (
    <div className="border border-white/30 rounded-md">
      <div className="h-96 p-3 overflow-y-auto">...</div>

      <div className="border-t border-t-white/30 p-3">
        <ChatInput authorName={userCtx?.name ?? ""} />
      </div>
      <div className="border-t border-t-white/30 p-3">
        <ChatInput authorName={"bot"} />
      </div>
    </div>
  );
};
