import React, { useState, PropsWithChildren } from "react";
import { ContactContext } from "src/context";
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
