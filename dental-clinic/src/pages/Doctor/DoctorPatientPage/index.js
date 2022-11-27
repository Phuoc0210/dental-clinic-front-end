import React from 'react'
import classNames from 'classnames/bind'
import PatientPageStyle from './DoctorPatientPage.css'
import SidebarDoctor from '../../../component/SidebarDoctor'
import DoctorPatientTable from '../../../component/DoctorPatientTable';
const cx = classNames.bind(PatientPageStyle);

function DoctorPatientPage(){
    return(
    <div className={cx('wrapper-patients-doctor')}>
        <SidebarDoctor />
        <DoctorPatientTable/>
    </div>       
    )
}


export default DoctorPatientPage