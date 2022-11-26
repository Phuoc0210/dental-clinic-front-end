import React from "react";
import Avt from "../../../assets/avt1.png";
import "./Story.css";

export default function Story() {
  return (
    <div style={{ marginLeft: "200px", marginRight: "200px" }}>
      <div
        style={{
          color: "#3d3191",
          fontSize: "2.2rem",
          fontWeight: "600",
          textDecoration: "underline",
          margin: "40px 0px",
          marginTop: "50px",
          textAlign: "center",
          color: "#f3d5eb",
        }}
      >
        CÂU CHUYỆN KHÁCH HÀNG
      </div>

      <div className="ConsultantContent">
        <img
          src={Avt}
          alt="consultant image"
          style={{ width: "300px", marginRight: "30px" }}
        />
        <div style={{ marginRight: "20px", marginLeft: "40px", color: "#eee" }}>
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
      </div>
      <div style={{ marginTop: "30px" }}></div>
    </div>
  );
}
