import React from "react";
import Logo from "../../../assets/Logo.png";
import time from "../../../assets/time.png";

export default function Time() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div
        style={{
          height: "300px",
          display: "flex",
          margin: "0px 200px",
        }}
      >
        <div>
          <img
            src={Logo}
            alt="logo"
            style={{
              height: "100px",
              margin: "40px 0px 20px",
              padding: "0px 300px",
            }}
          />
          <div style={{ marginTop: "20px", fontWeight: 600 }}>
            "Tại Dr.Strange, tất cả những dịch vụ đơn giản nhất đều do các bác
            sỹ đúng chuyên môn, giỏi nghề, nhiều kinh nghiệm tạo ra các “tác
            phẩm” hoàn mỹ với cảm giác dễ chịu, êm ái.”
          </div>
        </div>
        <img
          src={time}
          alt="Time"
          style={{ height: "50%", marginTop: "auto", marginBottom: "auto" }}
        />
      </div>
    </div>
  );
}
