import React, { createContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import authApi from "../../../api/authApi";
import { getCookie, setCookie } from "../../../utils/utils";
import "./index.scss";
import { useStore, actions } from "../../../store";

export const DataContext = createContext()

export default function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const [state, dispath] = useStore()
  console.log(state)
  const navigate = useNavigate();

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
      if (resp.status === 200 && resp.data.code === 1) {
        dispath(actions.setIsLogin(true))
        dispath(actions.setUserName(acc_un))
        dispath(actions.setUserRole(resp.data.data.role))
        if(resp.data.data.role !== "patient"){
          dispath(actions.setIsAdmin(true))
        }
        navigate('/homepage')
      } else{
        navigate('/login')
      }
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
