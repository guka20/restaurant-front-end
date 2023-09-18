import React, { ReactNode } from "react";
import "./MainButton.css";
type MainButtonProps = {
  children: ReactNode;
  handleButtonClick: () => void;
};
export const MainButton = ({
  children,
  handleButtonClick,
}: MainButtonProps) => {
  return (
    <button className="main-button" onClick={handleButtonClick}>
      {children}
    </button>
  );
};
