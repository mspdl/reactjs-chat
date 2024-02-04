"use client";

import { UserCheck } from "@/components/UserCheck";
import { ChatProvider } from "./contexts/ChatContext";
import { UserProvider } from "./contexts/UserContext";

export default function Home() {
  return (
    <div className="container mx-auto max-w-lg px-2">
      <UserProvider>
        <ChatProvider>
          <h1 className="text-3xl my-3 text-center">Simple chat</h1>
          <UserCheck />
        </ChatProvider>
      </UserProvider>
    </div>
  );
}
