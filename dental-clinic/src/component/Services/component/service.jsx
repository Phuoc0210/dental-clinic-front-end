import React from "react";
import Service from "./service.css"
import { service } from "../../../data";
import { LoGo } from "../../../data";
import { Slider } from "../../../data";
import classNames from "classnames/bind";

const cx = classNames.bind(Service);

export default function ContentService() {
    return (
       <div className={cx('wrapper-service')}>
        <img className={cx("SliderDV")} src={Slider.SliderDV} alt=""/>
            <h1 className={cx(" TitleDV")}>
                <center>
                    Các dịch vụ tại DR.STRANGE
                </center>
            </h1>
            <div className={cx("content")}>
           
            </div>
            <section className={cx("service")}>
                <div className={cx("container-service")} >
                    <div className={cx("row")} >
                        {service.map((service, index) => {
                            return (
                                <div className={cx("col-xl-4 col-lg-4 col-md-6 col-sm-12 service-item")} key={index} >
                                    <div className={cx("card")} >
                                        <div className={cx("ImageSV")}>
                                            <div className={cx("card-img-top")} >
                                                <img src={service.ImageUrl} className={cx("img-top")} alt="..." />
                                            </div>
                                        </div>
                                        <div className={cx("card-body")}>
                                            <h5 className={cx("card-title")}>{service.serviceName}</h5>
                                            <p className={cx("card-text")}><center>{service.metaDescription}</center></p>
                                            <button className={cx("showmore")}>Xem Chi Tiết</button>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </section>
            {/* <img src={service.ImageUrl} className={cx("card-img-top")} alt="..." /> */}
       </div>
    )
}
