import React, { useRef } from "react";
import authApi from "../../../api/authApi";
import "./index.scss";

export default function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    console.log(username, password);
    try {
      authApi.login({ username, password });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="Title">Đăng nhập</div>
      <form
        className="FormLogin"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Tên tài khoản
          </label>
          <input
            ref={usernameRef}
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
            ref={passwordRef}
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
    </>
  );
}
