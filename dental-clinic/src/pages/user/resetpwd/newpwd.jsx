import React from "react";
import "./index.scss";

export default function NewPassword() {
  return (
    <>
      <div className="Title">Cấp lại mật khẩu</div>

      <form className="FormLogin">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Mật khẩu
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Nhập lại mật khẩu
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="btnContainer">
          <button type="submit" className="btn btn-info CustomSubmit Cancel">
            Trở lại
          </button>
          <button type="submit" className="btn btn-info CustomSubmit">
            Gửi mã xác thực
          </button>
        </div>

        <div className="Spacer"></div>
      </form>
    </>
  );
}
