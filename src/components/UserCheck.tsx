import { useUser } from "@/app/contexts/UserContext";
import { Chat } from "./Chat";
import { User } from "./User";

export const UserCheck = () => {
  const userCtx = useUser();

  return (
    <div className="mt-14">
      {!userCtx?.name && <User />}
      {userCtx?.name && <Chat />}
    </div>
  );
};
