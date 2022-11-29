import React from "react";
import HistoryMATableStyle from './HistoryMATableStyle.css'
import classNames from "classnames/bind";
import { useState} from "react";
import { useEffect } from "react";
import { useStore } from "../store";
const cx = classNames.bind(HistoryMATableStyle);

function HistoryMATable({userID}){
    const [state, dispath] = useStore()
    const url1 = 'https://dental-clinic-project.herokuapp.com/api/authentication/get-profile'
    const data1 = 
    {
        "username": state.userName
    }
    const option1 = {
            method: "POST",
           
            headers: {
                 "Content-Type": "application/json"
                 
            },
            body: JSON.stringify(data1)
    }
    const url = 'https://dental-clinic-project.herokuapp.com/api/appointment/get-all-appointments'
    const [appoitments,setAppoitments] = useState([])
    useEffect(()=>{
        fetch( url1, option1)
            .then(response => response.json())
            .then( account => account.data
            ).then( data =>{
                fetch( url, {
                    method: "POST", 
                    headers: {
                         "Content-Type": "application/json"
                    },
                    body: JSON.stringify({"patient_id": data.id})
            })
                .then(response => response.json())
                .then( appoitments => {
                    setAppoitments(appoitments.data)
                }
            )
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
