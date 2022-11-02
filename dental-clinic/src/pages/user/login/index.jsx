import React from "react";
import "./index.scss";
import LoginImage from "../../../assets/loginImg.jpg";
import Login from "./login";
import Signup from "../signup/signup";

export default function FormContainer() {
  return (
    <div className="Container">
      <div className="LogoContainer">
        <img src={LoginImage} alt="logo" className="CustomLogo" />
      </div>
      {/* <Login /> */}
      <Signup />
    </div>
  );
}
