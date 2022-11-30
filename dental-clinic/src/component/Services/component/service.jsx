import React from "react";
import "./service.css"
import { service } from "../../../data";
import { LoGo } from "../../../data";
import { Slider } from "../../../data";
export default function ContentService() {
    return (
        <>  
             <img className="SliderDV" src={Slider.SliderDV} alt=""/>
            <h1 className=" TitleDV">
                <center>
                    Các dịch vụ tại DR.STRANGE
                </center>
            </h1>
            <div className="content">
            <img className="Logo" src={LoGo.ImgLogo} alt='LoGo'/>
            </div>
            <section className="service">
                <div className="container" >
                    <div className="row" >
                        {service.map((service, index) => {
                            return (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 service-item" key={index} >
                                    <div className="card" >
                                        <div className="ImageSV">
                                            <div className="card-img-top" >
                                                <img src={service.ImageUrl} className="img-top" alt="..." />
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{service.serviceName}</h5>
                                            <p className="card-text"><center>{service.metaDescription}</center></p>
                                            <button className="showmore">Xem Chi Tiết</button>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </section>
            {/* <img src={service.ImageUrl} className="card-img-top" alt="..." /> */}
        </>
    )
}
