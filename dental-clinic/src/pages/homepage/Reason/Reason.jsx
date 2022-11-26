import React from "react";
import { GiDoctorFace } from "react-icons/gi";
import { FaReact, FaTooth } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { GrShieldSecurity } from "react-icons/gr";
import { AiFillGift } from "react-icons/ai";
import ReasonImg from "../../../assets/reasonImg.png";

export default function Reason() {
  return (
    <div
      style={{
        backgroundColor: "#e9f5ff",
        padding: "0px 200px 40px",
      }}
    >
      <div
        style={{
          color: "#100777",
          fontSize: "1.8rem",
          textAlign: "center",
          fontWeight: "bold",
          paddingTop: "50px",
          paddingBottom: "20px",
        }}
      >
        Vì sao nên chọn Dr.Strange?
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <img src={ReasonImg} alt="reason image" />

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            color: "#5a5881",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "18px",
                fontWeight: "700",
              }}
            >
              <GiDoctorFace />
              <div style={{ marginLeft: "22px", marginBottom: "10px" }}>
                Bác sĩ chuyên môn cao
              </div>
            </div>

            <div
              style={{
                display: "flex",
                fontSize: "18px",
                fontWeight: "700",
              }}
            >
              <FaReact />
              <div style={{ marginLeft: "22px", marginBottom: "10px" }}>
                Công nghệ hiện đại
              </div>
            </div>

            <div
              style={{
                display: "flex",
                fontSize: "18px",
                fontWeight: "700",
              }}
            >
              <FaTooth />
              <div style={{ marginLeft: "22px", marginBottom: "10px" }}>
                Điều trị hiệu quả
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "18px",
                fontWeight: "700",
              }}
            >
              <BsPeople />
              <div style={{ marginLeft: "22px", marginBottom: "10px" }}>
                Giao tiếp nhiều ngôn ngữ
              </div>
            </div>

            <div
              style={{
                display: "flex",
                fontSize: "18px",
                fontWeight: "700",
              }}
            >
              <GrShieldSecurity />
              <div style={{ marginLeft: "22px", marginBottom: "10px" }}>
                An toàn tuyệt đối
              </div>
            </div>

            <div
              style={{
                display: "flex",
                fontSize: "18px",
                fontWeight: "700",
              }}
            >
              <AiFillGift />
              <div style={{ marginLeft: "22px", marginBottom: "10px" }}>
                Ưu đãi hấp dẫn
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
