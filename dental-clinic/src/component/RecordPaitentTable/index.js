import React, { useRef } from 'react'
import classNames from 'classnames/bind'
import {useEffect,useState} from 'react'
import RecordTableStyle from './RecordTableStyle.css'
import { useParams } from 'react-router-dom'
import {TiDelete} from 'react-icons/ti'
import {BsFillEyeFill} from 'react-icons/bs'
import Dialog from '../Dialog/Dialog'
const cx = classNames.bind(RecordTableStyle);

function RecordrecordTable(){
    const [dialog,setDialog] = useState({
        message:'',
        isLoading: false
    })

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

    const idRecord = useRef()
    const handleDialog = (message, isLoading) =>{
        setDialog(
            {
                message,
                isLoading,
            }
        )
    }
    function handleDelete(id){
        handleDialog( "Bạn có chắc muốn xóa bệnh án này?", true)
        idRecord.current = id
    }
    function callApiDeleteRecord(id){
        const url = 'https://dental-clinic-project.herokuapp.com/api/record/delete'
        const data = { "rec_id": id }
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
    const areSureDelete = (chosoe) => {
        if(chosoe){
            const newList = records.filter(record => record['rec_id'] != idRecord.current )
            setRecords(newList)
            //callApiDeleteRecord(idRecord.current)
            handleDialog( "", false)
        } else{
            handleDialog( "", false)
        }
    }


    function handleEdit(e){
        
    }
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
                        <th>Xem</th>
                    </tr>
                </thead>
                <tbody>
                    {  
                        records.map( (record, index) => (
                            <tr key={record['rec_id']} 
                            style={{backgroundColor: index % 2 != 0 ? "DCF2FF" : "#B8E3FF"}}
                            >
                                <td>{record['rec_id']}</td>
                                <td>{record['rec_dease']}</td>
                                <td>{record['d_name']}</td>
                                <td>{record['rec_date']}</td>
                                <td>{record['rec_lastmodified']}</td>
                                <td className={cx('delete-cell')}
                                    onClick={() => handleDelete(record['rec_id'])}>
                                    <TiDelete className={cx('icon')}/>
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
            { dialog.isLoading && <Dialog onDialog={areSureDelete} message = {dialog.message}/>}
        </div>
    )
}


export default RecordrecordTable