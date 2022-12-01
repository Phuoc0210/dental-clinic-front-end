import React, { createContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import authApi from "../../../api/authApi";
import { getCookie, setCookie } from "../../../utils/utils";
import "./index.scss";
import { useStore, actions } from "../../../store";
import LoginStyle from "./index.scss";
import {RiErrorWarningFill} from 'react-icons/ri'
import classNames from "classnames/bind";

const cx = classNames.bind(LoginStyle);

export const DataContext = createContext()

export default function Login() {
  const [isSubmit,setIsSubmit] = useState(false)
  const [loginSuccessfully,setLoginSuccessfully] = useState(true)
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
        setLoginSuccessfully(true)
        dispath(actions.setIsLogin(true))
        dispath(actions.setUserName(acc_un))
        dispath(actions.setUserRole(resp.data.data.role))
        if(resp.data.data.role !== "patient"){
          dispath(actions.setIsAdmin(true))
        }
        navigate('/homepage')
      } else{
        setLoginSuccessfully(false)
        navigate('/login')
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <div className={cx("wrapperFormLogin")}>
      <div className={cx("Title")}>Đăng nhập</div>
      <form
        className={cx("FormLogin")}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className={cx("mb-3")}>
          <label htmlFor="exampleInputEmail1" className={cx("form-label")}>
            Tên tài khoản
          </label>
          <input
            ref={usernameRef}
            className={cx("form-control")}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Username"
          />
        </div>

        {isSubmit && !usernameRef.current.value  &&<label className='warning'> <RiErrorWarningFill/> Chưa điền thông tin tài khoản!</label>} 

        <div className={cx("mb-3")}>
          <label htmlFor="exampleInputPassword1" className={cx("form-label")}>
            Mật khẩu
          </label>
          <input
            ref={passwordRef}
            type="password"
            className={cx("form-control")}
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        {isSubmit && !passwordRef.current.value && <label className='warning'> <RiErrorWarningFill/> Chưa điền mật khẩu!</label>} 

        <div className={cx("mb-3 form-check")}>
          <input
            type="checkbox"
            className={cx("form-check-input")}
            id="exampleCheck1"
          />
          <label className={cx("form-check-label")} htmlFor="exampleCheck1" style={{marginBottom: '20px'}}>
            Lưu mật khẩu
          </label>
        </div>

        <button type="submit" className={cx("btn btn-info CustomSubmit")} onClick={() => (setIsSubmit(true))}>
          Đăng nhập
        </button>
        <br />

        <div className={cx("Spacer")}></div>
        <a className={cx("CustomForgetPassword")}>
          <div className={cx("CustomForgetPasswordText")}>Quên tài khoản/ mật khẩu?</div>
        </a>

        <br />
        <button onClick={{}} className={cx("btn btn-info CustomSubmit")}>
          Tạo tài khoản mới
        </button>
        <div className={cx("Spacer")}></div>
      </form>
      {
          (isSubmit && passwordRef.current.value && passwordRef.current.value && !loginSuccessfully &&
            <label className='warning'> <RiErrorWarningFill/> Đăng nhập thất bại!</label>
          )
      }
      </div>
  );
}
