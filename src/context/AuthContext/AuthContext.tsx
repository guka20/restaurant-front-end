import { Dispatch, SetStateAction, createContext, useContext } from "react";
import { UserEnum } from "src/types/user.types";

type UserType = {
  userType: UserEnum;
  setUserType: Dispatch<SetStateAction<UserEnum>>;
};

export const UserTypeContext = createContext({} as UserType);
export const useUserTypeContext = () => {
  return useContext(UserTypeContext);
};
