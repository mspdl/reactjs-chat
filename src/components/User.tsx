import { useUser } from "@/app/contexts/UserContext";
import { useState } from "react";

export const User = () => {
  const [nameInput, setNameInput] = useState("");
  const userCtx = useUser();

  const handleButtonName = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code.toLowerCase() === "enter") {
      setName();
    }
  };

  const handleButtonClick = () => {
    setName();
  };

  const isNameValid = () => {
    return nameInput.trim() !== "" && nameInput !== "bot";
  };

  const setName = () => {
    if (isNameValid()) {
      userCtx?.setName(nameInput);
    }
    console.log(userCtx?.name)
  };

  return (
    <div >
      {`current username: ${userCtx?.name}`}
      <p className="text-xl mb-4">{"What's your name?"}</p>
      <div className="flex flex-col gap-3 text-lg">
        <input
          type="text"
          className="flex-1 border border-white/30 rounded-md px-4 py-3 text-white bg-white/10 outline-none"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          onKeyUp={handleButtonName}
        />
        <div className="flex justify-center">
          <button
            onClick={handleButtonClick}
            className="border border-white p-2 w-[30%] rounded-md bg-blue-600 hover:bg-blue-800"
          >
            Confirm name
          </button>
        </div>
      </div>
    </div>
  );
};
