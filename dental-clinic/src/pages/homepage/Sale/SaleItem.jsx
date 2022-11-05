import React from "react";

export default function SaleItem({ props }) {
  return (
    <>
      {props.map((item) => {
        return (
          <div style={{ marginLeft: "100px" }}>
            <img src={item.image} style={{ width: "300px" }} />
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "0px 0px 16px 16px",
              }}
            >
              <div
                style={{
                  textAlign: "left",
                  padding: "16px 10px",
                  fontWeight: 600,
                  color: "#74487f",
                }}
              >
                {item.title}
              </div>
              <div style={{ textAlign: "center" }}>{item.name}</div>
              <a
                href="#"
                style={{
                  color: "#74487f",
                  paddingBottom: "10px",
                  display: "flex",
                  justifyContent: "flex-end",
                  marginRight: "20px",
                }}
              >
                Xem chi tiết
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}
