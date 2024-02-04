import { useUser } from "@/app/contexts/UserContext";

type ChatMessageProps = {
  authorName: string;
  text: string;
};

export const ChatMessage = ({ authorName, text }: ChatMessageProps) => {
  const userCtx = useUser();

  return (
    <div
      className={`border border-white/20 rounded-md p-2 text-sm ${
        authorName !== userCtx?.name ? "self-start bg-white/5 text-left" : "self-end bg-white/10 text-right"
      }`}
    >
      <div className="font-bold">{authorName}</div>
      <p>{text}</p>
    </div>
  );
};
