import React, { useEffect } from 'react';
import MakeAppointmentStyle from './MakeAppointmentStyle.css'
import { Slider } from "../../data";
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useStore } from '../../store';
import Announcement from '../Announcement/Announcement';
import {RiErrorWarningFill} from 'react-icons/ri'
const cx = classNames.bind(MakeAppointmentStyle);

function MakeAppointment() {

    let minHour = new Date();
    minHour.setHours(8,30,0); // 8.30 am
    let maxHour = new Date();
    maxHour.setHours(19,30,0); // 7.30 pm
    const [isErrorTime,setIsErrorTime] = useState(false)
    const [isLoading,setIsLoading] = useState(false)
    const [isSubmit,setIsSubmit] = useState(false)
    const [state, dispath] = useStore()
    const [userID,setUserID] = useState()
    const [fullName,setFullName] = useState()
    const [phoneNumber,setPhoneNumber] = useState()
    const [dateChoose,setDateChoose] = useState()
    const [timeChoose,setTimeChoose] = useState()
    const [description,setDescription] = useState()
    const today = new Date();
    const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    const url = 'https://dental-clinic-project.herokuapp.com/api/authentication/get-profile'
    const data = 
    {
        "username": state.userName
    }
    const option = {
            method: "POST",
           
            headers: {
                 "Content-Type": "application/json"
                 
            },
            body: JSON.stringify(data)
    }
    useEffect(()=>{
        fetch( url, option)
            .then(response => response.json())
            .then( account => account.data)
            .then( data => {
                setUserID(data['id'])
                setFullName(data['name'])
                setPhoneNumber(data['phonenumber'])
            })
    },[])
    function CallApiMakeAppointment(){
        const url = 'https://dental-clinic-project.herokuapp.com/api/appointment/make-appointment'
        const data =
        {
            "patient_id": userID,
            "day": dateChoose,
            "time": timeChoose,
            "description": description
        }
         const option = {
             method: "POST",
             headers: {
                     "Content-Type": "application/json"
                     
             },
             body: JSON.stringify(data)
         }
         fetch( url, option)
             .then(response => response.json())
             .then( result => {
                 console.log(result)
             }
         )
    }
    const handleSubmit = () => {
        setIsSubmit(true)
        const [hour, minute] = timeChoose.split(':')
        let chooseHour = new Date();
            chooseHour.setHours(Number(hour),
                                Number(minute),
                                0); // timeChoose
        if(chooseHour >= minHour && chooseHour < maxHour ){
            setIsErrorTime(false)
        } else{
            setIsErrorTime(true)
        }
        if(dateChoose && timeChoose && description  && !isErrorTime){
            setIsLoading(true)
            //CallApiMakeAppointment()
        } else {
            setIsLoading(false)
        }
    }
    return (


        <div className={cx("wrapper-ma")}>
            <div className={cx("inner-ma")}>
                <div className={cx("title-ma")}>
                    Đặt Lịch Khám
                </div>
                <div className={cx("container-ma")}>
                    <div className={cx("Logo-ma")} >
                        <img className={cx("Slider")} src={Slider.ImgForm} alt="" />
                    </div>
                    <div  className={cx('form_wrapper')}>
                        <form className={cx('form_content')}>
                            <label className={cx('title-input')}>Họ Và Tên</label>

                            <label className="name" >{fullName}</label>
                            <label className={cx('title-input')}>Số Điện Thoại</label>

                            <label className="name">{phoneNumber}</label>
                        
                            <label className={cx('title-input')}>Ngày Khám</label>
                        
                            <input
                            type="date"
                            className={cx("day")}
                            //placeholder="01/01/2020"
                            min={date}
                            value={dateChoose}
                            onChange={ e => setDateChoose(e.target.value) }
                            />

                            {isSubmit && !dateChoose &&
                              <label className='warning'> <RiErrorWarningFill/> Chưa chọn ngày đặt lịch</label>} 

                           <label className={cx('title-input')}>Thời Gian 8:00-AM to 19:30-PM</label>
                            
                            <input
                            type="time"
                            min="07:00:00" max="8:00:00"
                            className={cx("time")}
                            value={timeChoose}
                            onChange={ e => setTimeChoose(e.target.value) }
                            />

                            {isSubmit && !timeChoose &&
                                 <label className='warning'> <RiErrorWarningFill/> Chưa chọn giờ đặt lịch</label>}
                            {isSubmit && isErrorTime &&
                                 <label className='warning'> <RiErrorWarningFill/> Giờ đặt lịch từ 8:00-AM to 19:30-PM</label>}

                            <label className={cx('title-input')}>Mô tả bệnh</label>
                        
                            <textarea
                            className={cx("description")}
                            placeholder="Mô tả bệnh án"
                            value={description}
                            onChange={ e => setDescription(e.target.value) }
                            />
                            
                            {isSubmit && !description &&
                                 <label className='warning'> <RiErrorWarningFill/> Chưa điền mô tả đặt lịch</label>}

                        </form>
                        <button onClick={() => handleSubmit()}
                                className={cx("btn-success")} >Submit</button>
                    </div>
                </div>
            </div>
           {isLoading &&  <Announcement url='/homepage'/>}
        </div>
    )
}

export default MakeAppointment