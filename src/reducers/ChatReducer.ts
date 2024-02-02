import { Message } from "@/app/types/Message";

type AddAction = {
  type: "add";
  payload: {
    user: string;
    text: string;
  };
};

type ChatAction = AddAction;

export const chatReducer = (state: Message[], action: ChatAction) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: Date.now(),
          user: action.payload.user,
          text: action.payload.text,
        },
      ];
    default:
      return state;
  }
};
