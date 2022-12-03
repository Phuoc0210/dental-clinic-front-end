import React, { useRef } from 'react'
import classNames from 'classnames/bind'
import {useEffect,useState} from 'react'
import AppointmentTableStyle from './AppointmentTableStyle.css'
import { useParams } from 'react-router-dom'
import {TiDelete} from 'react-icons/ti'
import {BsCheckLg} from 'react-icons/bs'
import Dialog from '../Dialog/Dialog'
const cx = classNames.bind(AppointmentTableStyle);

function AppointmentTable(){
    const [dialog,setDialog] = useState({
        message:'',
        isLoading: false
    })
    const [dialogE,setDialogE] = useState({
        messageE:'',
        isLoadingE: false
    })
    const url = 'https://dental-clinic-project.herokuapp.com/api/appointment/get-all-appointments'
    const [appointments,setAppointments] = useState([])
    const param = useParams();
    const data = {
        "patient_id": param.id
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
            .then( appointments => {
                setAppointments(appointments.data)
            }
        )
    },[param.id])

    const idappointment = useRef()
    const handleDialog = (message, isLoading) =>{
        setDialog(
            {
                message,
                isLoading,
            }
        )
    }
    const handleDialogE = (messageE, isLoadingE) =>{
        setDialogE(
            {
                messageE,
                isLoadingE,
            }
        )
    }
    function handleDelete(id, index){
        handleDialog( "Bạn có chắc muốn xóa lịch này?", true)
        idappointment.current = id
        indexAppointment.current = index
    }
    function callApiDeleteappointment(id){
        const url = 'https://dental-clinic-project.herokuapp.com/api/appointment/update-appointment'
        const data =
        {
            "appointment_id": id,
            "status":"canceled",
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
    const areSureDelete = (chosoe) => {
        if(chosoe){
            const temp = appointments.filter(appointment => appointment['id'] == idappointment.current )
            const newList = appointments.filter(appointment => appointment['id'] != idappointment.current )
            const data = {
                ...temp[0],
                status: "canceled"
            }
            newList.splice(indexAppointment.current,0,data);
            setAppointments(newList)
            callApiDeleteappointment(idappointment.current)
            handleDialog( "", false)
        } else{
            handleDialog( "", false)
        }
    }

    function callApiExamineappointment(id){
        const url = 'https://dental-clinic-project.herokuapp.com/api/appointment/update-appointment'
        const data =
        {
            "appointment_id": id,
            "status":"approved",
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
    const indexAppointment = useRef()
    function handleExamine(id,index){
        const temp = appointments.filter(appointment => appointment['id'] == id )
        if (temp[0].status === "waiting"){
            handleDialogE( "Bạn có chắc duyệt lịch này?", true)
            idappointment.current = id
            indexAppointment.current =index
        }
    }
    const areSureExamine = (chosoe) =>{
        if(chosoe){
            const temp = appointments.filter(appointment => appointment['id'] == idappointment.current )
            const newList = appointments.filter(appointment => appointment['id'] != idappointment.current )
            const data = {
                ...temp[0],
                status: "approved"
            }
            newList.splice(indexAppointment.current,0,data);
            setAppointments(newList)
            callApiExamineappointment(idappointment.current)
            handleDialogE( "", false)
        } else{
            handleDialogE( "", false)
        }
    }
    return(
        <div className={cx('wrapper-table')}>
            <div className={cx('name-table')}>Quản lý đặt lịch</div>
            <table className={cx('appointments-table')}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Phòng</th>
                        <th>Ngày</th>
                        <th>Bắt đầu</th>
                        <th>Kết thúc</th>
                        <th>Tình trạng</th>
                        <th>Xóa</th>
                        <th>Duyệt</th>
                    </tr>
                </thead>
                <tbody>
                    {  
                        appointments.map( (appointment, index) => (
                            <tr key={appointment['id']} 
                            style={{backgroundColor: index % 2 != 0 ? "DCF2FF" : "#B8E3FF"}}
                            >
                                <td>{appointment['id']}</td>
                                <td>{appointment['desc']}</td>
                                <td>{appointment['day']}</td>
                                <td>{appointment['otime']}</td>
                                <td>{appointment['etime']}</td>
                                <td>{appointment['status']}</td>
                                <td className={cx('delete-cell')}
                                    onClick={() => handleDelete(appointment['id'], index)}>
                                    <TiDelete className={cx('icon')}/>
                                </td>
                                <td className={cx('view-cell')}
                                    onClick={() => handleExamine(appointment['id'],index)} >
                                        <BsCheckLg className={cx('icon')}/>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            { dialog.isLoading && <Dialog onDialog={areSureDelete} message = {dialog.message}/>}
            { dialogE.isLoadingE && <Dialog onDialog={areSureExamine} message = {dialogE.messageE}/>}
        </div>
    )
}


export default AppointmentTable