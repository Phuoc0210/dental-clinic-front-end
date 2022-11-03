import React from "react";
import "./index.scss";

export default function Reset() {
  return (
    <>
      <div className="Title">Đặt lại mật khẩu</div>

      <div style={{ marginBottom: "20px" }}>Quên mật khẩu</div>

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
      </form>

      <div className="CustomSendEmail">
        <button type="submit" className="btn btn-info CustomSubmit">
          Gửi email cho tôi
        </button>
      </div>
    </>
  );
}
