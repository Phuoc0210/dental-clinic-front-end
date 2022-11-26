import React from "react";
import Slider1 from "../../../assets/homepageBG1.png";
import Slider2 from "../../../assets/homepageBG2.png";
import Slider3 from "../../../assets/homepageBG3.png";
import { BsFillCalendar2CheckFill } from "react-icons/bs";

export default function SliderBanner() {
  return (
    <>
      {/* <div style={{ marginTop: "120px" }}></div> */}

      <div
        style={{
          zIndex: "100",
          position: "fixed",
          top: "470px",
          right: "60px",
          fontSize: "40px",
          color: "#b0228c",
        }}
      >
        <BsFillCalendar2CheckFill />
      </div>

      <div
        style={{
          zIndex: "100",
          position: "absolute",
          top: "550px",
          right: "190px",
          fontSize: "40px",
        }}
      >
        <button
          type="button"
          class="btn customOrderBtn"
          style={{
            backgroundColor: "#b0228c",
            color: "#fff",
            position: "fixed",
          }}
        >
          ĐẶT LỊCH HẸN
        </button>
      </div>

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Slider1} className="d-block w-100" alt="slider 1" />
          </div>
          <div className="carousel-item">
            <img src={Slider2} className="d-block w-100" alt="slider 2" />
          </div>
          <div className="carousel-item">
            <img src={Slider3} className="d-block w-100" alt="slider 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
