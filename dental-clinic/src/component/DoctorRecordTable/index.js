import React from 'react'
import classNames from 'classnames/bind'
import {useEffect,useState} from 'react'
import DoctorRecordTableStyle from './DoctorRecordTableStyle.css'
import { useNavigate, useParams } from 'react-router-dom'
import {MdUpdate} from 'react-icons/md'
import {BsFillEyeFill} from 'react-icons/bs'

const cx = classNames.bind(DoctorRecordTableStyle);

function DoctorRecordTable(id){
    const navigate = useNavigate()
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
    function handleAdd(){   
        navigate(`/admin/admin/record/detail/add/${param.id}`)
    }
    function handleUpdate(recID){   
        navigate(`/admin/admin/record/detail/update/${param.id}/${recID}`)
    }
    function handleView(recID){
        navigate(`/admin/admin/record/detail/view/${param.id}/${recID}`)
    }
    return(
        <div className={cx('wrapper-table')}>
            <div className={cx('name-table')}>
                Quản lý hồ sơ bệnh án
            </div>  
            <div className={cx('search-create')}>
                <input type='search' className={cx('input-search-doctor')}
                            placeholder='Nhập thông tim tìm kiếm...'>    
                        </input>
                <button  onClick={() => handleAdd()}
                className={cx('btn-create')}>Thêm mới</button>
            </div>
            <table className={cx('records-table')}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Loại bệnh án</th>
                        <th>Tên bác sĩ</th>
                        <th>Ngày lâp</th>
                        <th>Ngày cập nhật</th>
                        <th>Cập nhật</th>
                        <th>Xem</th>
                    </tr>
                </thead>
                <tbody>
                    {  
                        records.map( (record, index) => (
                            <tr key={record['rec_id']} id={record['rec_id']} 
                            style={{backgroundColor: index % 2 != 0 ? "DCF2FF" : "#B8E3FF"}}
                            >
                                <td>{record['rec_id']}</td>
                                <td>{record['rec_dease']}</td>
                                <td>{record['d_name']}</td>
                                <td>{record['rec_date']}</td>
                                <td>{record['rec_lastmodified']}</td>
                                <td className={cx('update-cell')}
                                   onClick={() => handleUpdate(record['rec_id'])}>
                                    <MdUpdate className={cx('icon')}/>
                                </td>
                                <td className={cx('view-cell')}
                                    onClick={() => handleView(record['rec_id'])} >
                                        <BsFillEyeFill className={cx('icon')}/>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}


export default DoctorRecordTable