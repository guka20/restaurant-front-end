import React, { PropsWithChildren, useEffect, useState } from "react";
import { UserTypeContext } from "src/context";
import { Decoder } from "src/helper/jwtDecoder";
import { UserEnum } from "src/types/user.types";
export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [userType, setUserType] = useState<UserEnum>(UserEnum.GUEST);
  useEffect(() => {
    let token = localStorage.getItem("token") || null;
    if (token) {
      const decoded = Decoder(token);
      setUserType(decoded.role === "ADMIN" ? UserEnum.ADMIN : UserEnum.USER);
    }
  }, []);
  return (
    <UserTypeContext.Provider value={{ userType, setUserType }}>
      {children}
    </UserTypeContext.Provider>
  );
};
