import React from "react";
import "./index.scss";

export default function ResetPassword() {
  return (
    <>
      <div className="Title">Cấp lại mật khẩu</div>

      <div className="VerifyText">Vui lòng nhập địa chỉ email để xác thực</div>

      <form className="FormLogin">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Địa chỉ email
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
            Lưu
          </button>
        </div>

        <div className="Spacer"></div>
      </form>
    </>
  );
}
