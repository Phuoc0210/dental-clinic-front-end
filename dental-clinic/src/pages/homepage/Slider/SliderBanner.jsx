import React from "react";
import Slider1 from "../../../assets/homepageBG1.png";
import Slider2 from "../../../assets/homepageBG2.png";
import Slider3 from "../../../assets/homepageBG3.png";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../../store";
export default function SliderBanner() {
  const [state, dispath] =useStore()
  const navigate = useNavigate()
  const handleClick = () => {
    if(state.isLogin){
      navigate('/makeappointment')
    } else{
      navigate('/login')
    }
  }
  return (
    <>
    <div style={{ height: "40px", backgroundColor: "#ffffff"}}></div>
      <div
        style={{
          zIndex: "100",
          position: "fixed",
          top: "550px",
          right: "60px",
          fontSize: "40px",
          color: "#115d9d",
        }}
      >
        <BsFillCalendar2CheckFill />
      </div>

      <div
        style={{
          zIndex: "100",
          position: "absolute",
          top: "600px",
          right: "190px",
          fontSize: "40px",
        }}
      >
        <button onClick={() => handleClick()}
          type="button"
          class="btn customOrderBtn"
          style={{
            backgroundColor: "#115d9d",
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
