import React from "react";
import { Blog } from "../../../data";
import './ContentBlog.css';
import { LoGo } from "../../../data";
import { Slider } from "../../../data";
export default function ContentBlog() {
    return (
        <div className="containerBlog">
            <img className="SliderBlog" src={Slider.SliderBlog} alt=""/>
            <h1 className=" TitleDV">
                <center>
                    KIẾN THỨC NHA KHOA - BLOG
                </center>
            </h1>
           
            <p class="Description" >
            <center >
            Tổng hợp kiến thức về bệnh lý răng miệng, cách điều trị, phòng ngừa và chăm sóc hiệu quả. Đừng quên bảo vệ sức khỏe răng miệng đúng cách mỗi ngày và liên hệ với Elite Dental ngay khi dấu hiệu bất thường để được tư vấn chính xác và nhanh chóng.
            </center>
            </p>
            <section className="service">
                <div className="container" >
                    <div className="row" >
                        {Blog.map((Blog, index) => {
                            return (
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 service-item" key={index} >
                                    <div className="card" >
                                        <div className="ImageSV">
                                            <div className="card-img-top" >
                                                <img src={Blog.ImageUrl} className="img-top" alt="..." />
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{Blog.BlogName}</h5>
                                            <p className="card-text"><center>Date Update: {Blog.Date}</center></p>
                                            <button className="showmore">Xem Blog</button>
                                        </div>


                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
