import { useState } from "react";
import { InputElement, MainButton } from "src/components";
import icon from "src/assets/logo/chef.png";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { SignUpPropertiesTypes } from "src/types/user.types";
import { signup } from "src/helper/auth/auth";
import Swal from "sweetalert2";
import { useLoadingContext } from "src/context";
const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const { setIsLoading } = useLoadingContext();
  const mutation = useMutation(
    (userInfo: SignUpPropertiesTypes) => signup(userInfo),
    {
      onError: (error: Error) => {
        setIsLoading(false);
        setError(error.message);
      },
      onSuccess: () => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User signed up successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsLoading(false);
        navigate("/login");
      },
    }
  );
  const [signUpProperties, setSignUpProperties] =
    useState<SignUpPropertiesTypes>({
      fullname: "",
      email: "",
      password: "",
    });
  const handleValueChange = (e: any) => {
    const { value, name } = e.target;

    setSignUpProperties({
      ...signUpProperties,
      [name]: value,
    });
  };
  const handleSignUpClick = () => {
    setIsLoading(true);
    mutation.mutate(signUpProperties);
  };
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
          name="fullname"
          type="text"
          placeholder="Full name"
          value={signUpProperties?.fullname}
          handleContactValueChange={handleValueChange}
        />
        <InputElement
          name="email"
          type="email"
          placeholder="Email address"
          value={signUpProperties?.email}
          handleContactValueChange={handleValueChange}
        />
        <InputElement
          name="password"
          type="password"
          placeholder="Password"
          value={signUpProperties?.password}
          handleContactValueChange={handleValueChange}
        />
        <div className="error-text">{error && error}</div>
        <MainButton handleButtonClick={handleSignUpClick}>SIGN UP</MainButton>
        <div className="line"></div>
        <MainButton handleButtonClick={handleloginClick}>SIGN IN</MainButton>
      </div>
    </div>
  );
};
export default Signup;
