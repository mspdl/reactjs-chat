import { ReactNode, createContext, useContext, useState } from "react";

type UserContext = {
  name: string;
  setName: (newName: string) => void;
};

const UserContext = createContext<UserContext | null>(null);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState("");

  <UserContext.Provider value={{ name, setName }}>
    {children}
  </UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
