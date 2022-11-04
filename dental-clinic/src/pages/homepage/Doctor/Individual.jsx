import React from "react";

export default function Individual({ props }) {
  return (
    <>
      {props.map((item) => {
        return (
          <div style={{ marginLeft: "20px" }}>
            <img src={item.image} style={{ width: "200px" }} />
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "0px 0px 16px 16px",
              }}
            >
              <div style={{ textAlign: "center" }}>{item.title}</div>
              <div style={{ textAlign: "center" }}>{item.name}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}
