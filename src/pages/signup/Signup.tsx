import { useState } from "react";
import { InputElement, MainButton } from "src/components";
import icon from "src/assets/logo/chef.png";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
type SignUpPropertiesTypes = {
  email: string;
  password: string;
};

export const Signup = () => {
  const navigate = useNavigate();
  const [SignUpProperties, setSignUpProperties] =
    useState<SignUpPropertiesTypes>({
      email: "",
      password: "",
    });
  const handleValueChange = (e: any) => {
    const { value, name } = e.target;

    setSignUpProperties({
      ...SignUpProperties,
      [name]: value,
    });
  };
  const handleSignUpClick = () => {};
  const handleloginClick = () => {
    navigate("/login");
  };
  return (
    <div className="signup-page">
      <div className="image">
        <img src={icon} alt="" width={50} />
      </div>
      <div className="signup-elements">
        <InputElement
          name="email"
          type="email"
          placeholder="Email address"
          value={SignUpProperties?.email}
          handleContactValueChange={handleValueChange}
        />
        <InputElement
          name="password"
          type="password"
          placeholder="Password"
          value={SignUpProperties?.password}
          handleContactValueChange={handleValueChange}
        />

        <MainButton handleButtonClick={handleSignUpClick}>SIGN UP</MainButton>

        <div className="line"></div>

        <MainButton handleButtonClick={handleloginClick}>SIGN IN</MainButton>
      </div>
    </div>
  );
};
