import React, { Component } from "react";
import './MakeAppointment.css'
import axios from 'axios'
import { LoGo } from "../../data";
import { Slider } from "../../data";
const BASE_URL="https://dental-clinic-project.herokuapp.com/api/appointment/make-appointment"
let today = new Date();
let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
class PostForm extends Component {
    state = {
        ten: null,
        sdt:null,
        patient_id: "1",
        day: null,
        time: null,
        description: null,
        isSubmitted:false,
        error: false
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitHandler =(e) => {
        e.preventDefault()
        if (this.state.day && this.state.time && this.state.description )
        axios.post(`${BASE_URL}`,{
            patient_id: this.state.patient_id,
            day: this.state.day,
            time: this.state.time,
            description: this.state.description
    
        })

        .then(res => {
            alert('Đặt Lịch Thành Công')
            this.setState({
                isSubmitted: true,
                error: false,
                day:null,
                time:null,
                description: null,
            })
            console.log(res)
            e.target.reset()
        })
        .catch(error => {
            this.setState({
                error:true,
                isSubmitted: false
            })
        })
    }
    render() {
        return (        
            < div className="content">
                <div className="ImgLogo">
                    <img src={LoGo.ImgLogo} alt="" />
                    
                </div>
                <div className="container">
                    <div className="Logo" >
                        <img className="Slider" src={Slider.ImgForm} alt="" />
                    </div>
                    <div FormContent>
                    <form onSubmit={this.submitHandler}>
                    
                        <label htmlFor="fname">Họ Và Tên</label>
                        <input type="text" className="name" 
                        name="name"
                         placeholder="Nhập họ và tên..." 
                         value={this.state.ten}
                         onChange={this.changeHandler}
                         />

                        {/* <input class="Id" type="number" id="patientID" 
                        name="patientID"
                        /> */}

                        <label htmlFor="phone">Số Điện Thoại</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Nhập số điện thoại..."
                            value={this.state.sdt}
                            onChange={this.changeHandler}
                        />
                        <label htmlFor="date">Ngày Khám</label>
                        <input
                            type="date"
                            className="day"
                            name="day"
                            placeholder="01/01/2020"
                            min={date}
                            value={this.state.day}
                            onChange={this.changeHandler}
                        />
                        <label htmlFor="time">Thời Gian 8:00-AM to 19:30-PM</label>
                        <input
                            type="time"
                            className="time"
                            name="time"
                            value={this.state.time}
                            onChange={this.changeHandler}

                        />

                        <label htmlFor="description">Mô tả bệnh</label>
                        <textarea
                            // type="text"
                            name="description"
                            className="description"
                            placeholder="Mô tả bệnh án"
                            value={this.state.description}
                            onChange={this.changeHandler}
                        />
                        <input type="submit" className="btn btn-success" />
                    </form>
                    </div>
                </div>
                {/* {this.state.isSubmitted && alert('Đăng Ký Thành Công !') }
                {this.state.error && alert('Đăng Ký Thất Bại !')} */}
            </div>
           
        )
    }
}
export default PostForm
