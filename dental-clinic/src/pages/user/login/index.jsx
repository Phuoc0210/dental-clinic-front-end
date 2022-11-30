import React from "react";
import LoginImage from "../../../assets/LoginImage.png";
import Login from "./login";
import Signup from "../signup/signup";
import Reset from "../reset/reset";
import ResetPassword from "../resetpwd/resetpwd";
import NewPassword from "../resetpwd/newpwd";
import LoginStyle from "./index.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(LoginStyle);

export default function FormContainer() {
  return (
    <div className={cx("loginWrapper")}>
      <div className={cx("loginContainer")}>
        <div className={cx("LogoContainer")}>
          <img src={LoginImage} alt="logo" className={cx("CustomLogo")} />
        </div>
        <Login />
        {/* <Signup /> */}
        {/* <Reset /> */}
        {/* <ResetPassword /> */}
        {/* <NewPassword /> */}
      </div>
    </div>
  );
}
