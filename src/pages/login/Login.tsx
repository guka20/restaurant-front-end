import { useState } from "react";
import { InputElement, MainButton } from "src/components";
import icon from "src/assets/logo/chef.png";
import "./Login.css";
import { useMutation } from "@tanstack/react-query";
import { loginPost } from "src/helper";
import { LoginPropertiesTypes, TokenDataType } from "./types/index";
import { Link } from "react-router-dom";
import { useUserTypeContext } from "src/context";
import { Decoder } from "src/helper/jwtDecoder";
import { UserEnum } from "src/types/user.types";

export const Login = () => {
  const [loginProperties, setLoginProperties] = useState<LoginPropertiesTypes>({
    email: "",
    password: "",
  });
  const { setUserType } = useUserTypeContext();
  // ================ SEND POST REQUEST TO GET ACCESSTOKEN
  const createLoginMutation = useMutation({
    mutationFn: loginPost,
    onSuccess: (data: TokenDataType) => {
      const result = Decoder(data.accessToken);
      localStorage.setItem("token", data.accessToken);
      setUserType(result.role === "ADMIN" ? UserEnum.ADMIN : UserEnum.USER);
    },
  });

  // ================ HANDLE EACH INPUT ELEMENT VALUE CHANGE
  const handleValueChange = (e: any) => {
    const { value, name } = e.target;

    setLoginProperties({
      ...loginProperties,
      [name]: value,
    });
  };

  // ================ HANDLE LOGIN BUTTON CLICK
  const handleLoginClick = () => {
    createLoginMutation.mutate(loginProperties);
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

        <Link to="/signup">
          <MainButton handleButtonClick={() => {}}>SIGN UP</MainButton>
        </Link>
      </div>
    </div>
  );
};
