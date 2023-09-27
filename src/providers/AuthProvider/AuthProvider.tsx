import React, { PropsWithChildren, useState } from "react";
import { UserTypeContext } from "src/context";
import { UserEnum } from "src/types/user.types";
export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [userType, setUserType] = useState<UserEnum>(UserEnum.GUEST);
  return (
    <UserTypeContext.Provider value={{ userType, setUserType }}>
      {children}
    </UserTypeContext.Provider>
  );
};
