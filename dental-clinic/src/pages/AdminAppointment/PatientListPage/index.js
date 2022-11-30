import React from 'react'
import classNames from 'classnames/bind'
import Sidebar from '../../../component/Sidebar'
import PatientListPageStyle from './PatientListPageStyle.css'
import PatientAppointmentTable from '../../../component/PatientAppointmentTable'
const cx = classNames.bind(PatientListPageStyle);

function PatientListPage(){
    const oke = 'đặt lịch'
    return(
    <div className={cx('wrapper-patient-list')}>
        <Sidebar />
        <PatientAppointmentTable />
    </div>       
    )
}


export default PatientListPage