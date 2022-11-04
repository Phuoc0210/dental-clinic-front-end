import React from "react";
import ConsultantImg from "../../../assets/ConsultantImg.png";
import "./ConsultantStyle.css";
import { BsFillChatDotsFill } from "react-icons/bs";

export default function Consultant() {
  return (
    <div style={{ marginLeft: "200px", marginRight: "200px" }}>
      <div
        style={{
          zIndex: "100",
          position: "absolute",
          top: "678px",
          left: "140px",
          fontSize: "40px",
          color: "#b0228c",
        }}
      >
        <BsFillChatDotsFill />
      </div>

      <div
        style={{
          zIndex: "100",
          position: "absolute",
          top: "0%",
          left: "200px",
          top: "680px",
          fontSize: "40px",
        }}
      >
        <button
          type="button"
          class="btn customOrderBtn"
          style={{
            backgroundColor: "#b0228c",
            color: "#fff",
          }}
        >
          CHAT TƯ VẤN
        </button>
      </div>

      <div
        style={{
          color: "#77516d",
          fontSize: "2.5rem",
          fontWeight: "800",
          textDecoration: "underline",
          margin: "40px 0px",
          marginTop: "100px",
        }}
      >
        Dr.Strange
      </div>

      <div className="ConsultantContent">
        <div style={{ marginRight: "20px" }}>
          Nha khoa <b> Dr.Strange</b> được xây dựng và phát triển hướng đến mô
          hình trung tâm nha khoa kỹ thuật cao chuyên sâu với các dịch vụ mũi
          nhọn như dán sứ veneer, chỉnh nha, bọc răng sứ, cấy ghép implant, điều
          trị cười hở lợi, nhổ răng khôn, điều trị. Để thực hiện được sứ mệnh
          đó, Nha khoa Dr.Strange hiểu rằng. Chúng tôi phải tập trung đầu tư vào
          con người và hệ thống trang thiết bị công nghệ hiện đại. Nha khoa
          Dr.Strange hiểu rằng, sự phát triển và thành công phải xuất phát từ
          hiệu quả điều trị, sự hài lòng của khách hàng. Do đó, đội ngũ bác sĩ
          chất lượng chuyên môn cao, đào tạo chuyên sâu theo phân khoa luôn được
          chú trọng phát triển số 1 tại Dr.Strange.
        </div>
        <img src={ConsultantImg} alt="consultant image" />
      </div>

      <div style={{ marginTop: "30px" }}></div>
    </div>
  );
}