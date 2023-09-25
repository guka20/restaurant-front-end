import React, { useState } from "react";
import { InputElement, MainButton } from "src/components";
import icon from "src/assets/logo/chef.png";
import "./Login.css";
import { useNavigate } from "react-router-dom";
type LoginPropertiesTypes = {
  email: string;
  password: string;
};

export const Login = () => {
  const navigate = useNavigate();
  const [loginProperties, setLoginProperties] = useState<LoginPropertiesTypes>({
    email: "",
    password: "",
  });
  const handleValueChange = (e: any) => {
    const { value, name } = e.target;

    setLoginProperties({
      ...loginProperties,
      [name]: value,
    });
  };
  const handleLoginClick = () => {};
  const handleSignUpClick = () => {
    navigate("/signup");
  };
  return (
    <div className="login-page">
      <div className="image">
        <img src={icon} alt="" width={50} />
      </div>
      <div className="login-elements">
        <InputElement
          name="email"
          type="email"
          placeholder="Email address"
          value={loginProperties?.email}
          handleContactValueChange={handleValueChange}
        />
        <InputElement
          name="password"
          type="password"
          placeholder="Password"
          value={loginProperties?.password}
          handleContactValueChange={handleValueChange}
        />

        <div className="forgot-password">Forgot password</div>

        <MainButton handleButtonClick={handleLoginClick}>SIGN IN</MainButton>

        <div className="line"></div>

        <MainButton handleButtonClick={handleSignUpClick}>SIGN UP</MainButton>
      </div>
    </div>
  );
};
