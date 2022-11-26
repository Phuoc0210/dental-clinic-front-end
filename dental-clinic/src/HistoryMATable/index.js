import React from "react";
import HistoryMATableStyle from './HistoryMATableStyle.css'
import classNames from "classnames/bind";
import { useState} from "react";
import { useEffect } from "react";
const cx = classNames.bind(HistoryMATableStyle);

function HistoryMATable(){
    const url = 'https://dental-clinic-project.herokuapp.com/api/appointment/get-all-appointments'
    const [appoitments,setAppoitments] = useState([])
    const data = { "patient_id": 1 };
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
                setAppoitments(appoitments.data)
            }
        )
    },[])
   console.log(appoitments)
    return(
        <div className={cx('wrapper-table')}>
            <div className={cx('name-table')}>Lịch sử đặt lịch</div>
            <table className={cx('hma-table')}>
                <thead>
                    <tr>
                        <th>Loại bệnh án</th>
                        <th>Tên bác sĩ</th>
                        <th>Ngày lâp</th>
                        <th>Ngày cập nhật</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appoitments.map( appoitment => (
                            <tr key={appoitment['id']} id={appoitment['id']} 
                            style={{backgroundColor: appoitment['id'] % 2 == 0 ? "DCF2FF" : "#B8E3FF"}}
                            >
                                <td>{appoitment['desc']}</td>
                                <td>{appoitment['otime']}</td>
                                <td>{appoitment['etime']}</td>
                                <td>{appoitment['place']}</td>
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
