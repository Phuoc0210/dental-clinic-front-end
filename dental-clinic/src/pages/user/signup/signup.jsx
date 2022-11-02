import React from "react";
import "./index.scss";

export default function Signup() {
  return (
    <>
      <div className="Title">Đăng ký tài khoản</div>
      <form className="FormLogin">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Họ tên
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="ContactContainer">
          <div className="mb-6 CustomEmail">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-6 CustomPhone">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Số điện thoại
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
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

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Xác nhận mật khẩu
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div className="Spacer"></div>
        <button type="submit" className="btn btn-info CustomSubmit">
          Tạo tài khoản mới
        </button>
        <div className="Spacer"></div>
      </form>
    </>
  );
}
