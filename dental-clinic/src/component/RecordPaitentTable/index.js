import React from 'react'
import classNames from 'classnames/bind'
import {useEffect,useState} from 'react'
import RecordTableStyle from './RecordTableStyle.css'
import { useParams } from 'react-router-dom'
import {RiDeleteBin5Fill} from 'react-icons/ri'
import {HiPencil} from 'react-icons/hi'

const cx = classNames.bind(RecordTableStyle);

function RecordrecordTable(id){
    const url = 'https://dental-clinic-project.herokuapp.com/api/record/recordsOfPatient'
    const [records,setRecords] = useState([])
    const param = useParams();
    const data = { p_id: param.id };
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
            .then( records => {
                setRecords(records.data)
            }
        )
    },[param.id])
   console.log(records)
    return(
        <div className={cx('wrapper-table')}>
            <div className={cx('name-table')}>Quản lý hồ sơ bệnh án</div>
            <table className={cx('records-table')}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Loại bệnh án</th>
                        <th>Tên bác sĩ</th>
                        <th>Ngày lâp</th>
                        <th>Ngày cập nhật</th>
                        <th>Xóa</th>
                        <th>Chỉnh sửa</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map( record => (
                            <tr key={record['rec_id']} id={record['rec_id']} 
                            style={{backgroundColor: record['rec_id'] % 2 == 0 ? "DCF2FF" : "#B8E3FF"}}
                            >
                                <td>{record['rec_id']}</td>
                                <td>{record['rec_dease']}</td>
                                <td>{record['d_name']}</td>
                                <td>{record['rec_date']}</td>
                                <td>{record['rec_lastmodified']}</td>
                                <td className={cx('edit-cell')}><RiDeleteBin5Fill className={cx('delete-icon')}/></td>
                                <td className={cx('edit-cell')}><HiPencil className={cx('update-icon')}/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}


export default RecordrecordTable