import React from "react";
import Individual from "./Individual";
import dr1 from "../../../assets/dr1.png";
import dr2 from "../../../assets/dr2.png";
import dr3 from "../../../assets/dr3.png";
import dr4 from "../../../assets/dr4.png";

export default function Doctor() {
  const doctors = [
    {
      image: dr1,
      title: "Bác sĩ",
      name: "Andrea Khuu",
    },
    {
      image: dr2,
      title: "Bác sĩ",
      name: "Liam Nguyen",
    },
    {
      image: dr3,
      title: "Bác sĩ",
      name: "Shiba Nguyen",
    },
    {
      image: dr4,
      title: "Bác sĩ",
      name: "Abbey Tran",
    },
  ];
  return (
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
      <Individual props={doctors} />
    </div>
  );
}
