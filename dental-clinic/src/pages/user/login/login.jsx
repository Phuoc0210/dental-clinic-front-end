import React, { useRef } from "react";
import authApi from "../../../api/authApi";
import { getCookie, setCookie } from "../../../utils/utils";
import "./index.scss";
  var name = 1;
export let userName=name;
export default function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const acc_un = usernameRef.current.value;
    const acc_mk = passwordRef.current.value;
    try {
      const resp = await authApi.login({ acc_un, acc_mk });
      console.log(resp);
      const cookie = {
        accessToken: "abc",
        acc_un,
        rememberId: true,
      };
      setCookie(`token`, JSON.stringify(cookie));
      getCookie(`token`);
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
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={this.ha}
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
        <button onClick={{}} className="btn btn-info CustomSubmit">
          Tạo tài khoản mới
        </button>
        <div className="Spacer"></div>
      </form>
    </>
  );
}
