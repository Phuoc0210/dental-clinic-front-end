import React from "react";
import './MakeAppointment.css'
import { LoGo } from "../../data";
import Time from "../homepage/Time/Time";
// import Carousel from 'react-bootstrap/Carousel';
import { Slider } from "../../data";
//content.js
export default function Book() {
    return (
        <>
            <div className="Book">
                <h2>
                    <center>Đặt Lịch Khám</center>
                </h2>
                <div className="ImgLogo">
                    <img src={LoGo.ImgLogo} alt=""/>
                </div>
                
                <table cellPadding={2} cellSpacing={2}>
                    <tbody>
                        <tr>
                            <td className="Logo" >
                                <img src={Slider.ImgForm} alt=""/>
                            </td>

                            <td className="FormDL">
                                <div className="container">
                                    <h2>Đặt Lịch khám</h2>
                                    <form action="/action_page.php">
                                        <label htmlFor="fname">Họ Và Tên</label>
                                        <input type="text" id="name" name="name" placeholder="Nhập họ và tên..." />
                                        <label htmlFor="lname">Email</label>
                                        <input type="text" id="email" name="email" placeholder="Nhập email..." />
                                        <label htmlFor="country">Số Điện Thoại</label>
                                        <input
                                            type="text"
                                            id="phone"
                                            name="phone"
                                            placeholder="Nhập số điện thoại..."
                                        />
                                        
                                        <label htmlFor="description">Mô tả bệnh</label>
                                        <input
                                            type="text"
                                            id="description"
                                            name="description"
                                            placeholder="Mô tả bệnh án"
                                        />
                                        <input type="submit" defaultValue="Submit" />
                                    </form>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>


            </div>
            <Time />
        </>
    )
}
