import React from 'react'
import classNames from 'classnames/bind'
import {useEffect,useState} from 'react'
import DoctorRecordTableStyle from './DoctorRecordTableStyle.css'
import { useParams } from 'react-router-dom'
import {MdUpdate} from 'react-icons/md'
import {BsFillEyeFill} from 'react-icons/bs'

const cx = classNames.bind(DoctorRecordTableStyle);

function DoctorRecordTable(id){
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
    function handleDelete(e){   
       const node = e.target.parentElement.closest('tr')
       const newList = records.filter(record => record['rec_id'] != node.id )
       setRecords(newList)
    }
    function handleEdit(e){
        
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
                <button className={cx('btn-create')}>Thêm mới</button>
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
                                    onClick={handleDelete}>
                                    <MdUpdate className={cx('icon')}/>
                                </td>
                                <td className={cx('view-cell')}
                                    onClick={handleEdit} >
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