import { Dispatch, SetStateAction, createContext, useContext } from "react";

type ContactContextType = {
  isContactOpen: boolean;
  setIsContactOpen: Dispatch<SetStateAction<boolean>>;
};

export const ContactContext = createContext({} as ContactContextType);

export const useContactContext = () => {
  return useContext(ContactContext);
};
