import React from "react";
import SaleItem from "./SaleItem";
import sale1 from "../../../assets/sale1.png";
import sale2 from "../../../assets/sale2.png";
import sale3 from "../../../assets/sale3.png";

export default function Doctor() {
  const doctors = [
    {
      image: sale1,
      title: "Ưu đãi mừng ngày Phụ nữ Việt Nam",
      name: "",
    },
    {
      image: sale2,
      title: "Chương trình ưu đãi mừng Tết",
      name: "",
    },
    {
      image: sale3,
      title: "Chương trình ưu đãi lên đến 50%",
      name: "",
    },
  ];
  return (
    <>
      <div
        style={{
          color: "#74487f",
          fontWeight: "500",
          fontSize: "30px",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        CHƯƠNG TRÌNH ƯU ĐÃI
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
          paddingTop: "40px",
        }}
      >
        <SaleItem props={doctors} />
      </div>
    </>
  );
}
