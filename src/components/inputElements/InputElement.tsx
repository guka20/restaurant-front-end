import { ChangeEvent } from "react";
import "./InputElement.css";
type InputElementProps = {
  name: string;
  value: string;
  type: string;
  placeholder: string;
  handleContactValueChange: (e: ChangeEvent<HTMLElement>) => void;
};

export const InputElement = ({
  name,
  value,
  type,
  placeholder,
  handleContactValueChange,
}: InputElementProps) => {
  return (
    <input
      className="input"
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={(e) => handleContactValueChange(e)}
    />
  );
};
