import React from "react";
import "./index.scss";
import LoginImage from "../../../assets/loginImg.jpg";

export default function FormContainer() {
  return (
    <div className="Container">
      <div className="LogoContainer">
        <img src={LoginImage} alt="logo" className="CustomLogo" />
      </div>
      <div className="Title">Đăng nhập</div>
      <form className="FormLogin">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Tên tài khoản
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Mật khẩu
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Lưu mật khẩu
          </label>
        </div>

        <button type="submit" className="btn btn-info CustomSubmit">
          Đăng nhập
        </button>
        <br />

        <div className="Spacer"></div>
        <a className="CustomForgetPassword">
          <div className="CustomForgetPasswordText">Quên mật khẩu?</div>
        </a>

        <br />
        <button type="submit" className="btn btn-info CustomSubmit">
          Tạo tài khoản mới
        </button>
        <div className="Spacer"></div>
      </form>
    </div>
  );
}
