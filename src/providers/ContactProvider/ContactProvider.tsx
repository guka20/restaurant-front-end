import React, { useState, useEffect, PropsWithChildren } from "react";
import { ContactContext } from "src/context";
import ReactDOM from "react-dom";
export const ContactProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  return (
    <ContactContext.Provider
      value={{
        isContactOpen,
        setIsContactOpen,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
