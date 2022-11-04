import React from "react";
import certificate from "../../../assets/certificate.png";

export default function Certificate() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
          hieght: "500px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "column",
        }}
      >
        <h2 style={{ textAlign: "center", paddingTop: "30px" }}>
          CHỨNG NHẬN QUỐC TẾ
        </h2>
        <img
          src={certificate}
          alt="certificate"
          style={{
            width: "70%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        ;
      </div>
    </>
  );
}
