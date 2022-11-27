import React from "react";
import HistoryMATableStyle from './HistoryMATableStyle.css'
import classNames from "classnames/bind";
import { useState} from "react";
import { useEffect } from "react";
const cx = classNames.bind(HistoryMATableStyle);

function HistoryMATable({userID}){
    const url = 'https://dental-clinic-project.herokuapp.com/api/appointment/get-all-appointments'
    const [appoitments,setAppoitments] = useState([])
    const data =
    {
        "patient_id": 1
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
            .then( appoitments => {
                console.log(appoitments)
                setAppoitments(appoitments.data)
            }
        )
    },[])
    return(
        <div className={cx('wrapper-table')}>
            <div className={cx('name-table')}>Lịch sử đặt lịch</div>
            <table className={cx('hma-table')}>
                <thead>
                    <tr>
                        <th>Dịch vụ</th>
                        <th>Địa điểm</th>
                        <th>Phòng</th>
                        <th>Ngày</th>
                        <th>Bắt đầu</th>
                        <th>Kết thúc</th>
                        <th>Tình trạng</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appoitments.map( (appoitment,index) => (
                            <tr key={appoitment['id']} 
                            style={{backgroundColor: index % 2 != 0 ? "DCF2FF" : "#B8E3FF"}}
                            >
                                <td>{appoitment['desc']}</td>
                                <td>{appoitment['place']}</td>
                                <td>{appoitment['room']}</td>
                                <td>{appoitment['day']}</td>
                                <td>{appoitment['otime']}</td>
                                <td>{appoitment['etime']}</td>
                                <td>{appoitment['status']}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default HistoryMATable
