import React from "react";
import classNames from "classnames/bind";
import MedicalRecordStyle from './MedicalrecordsStyle.css'
import RecordPatientTable from "../../../component/RecordPaitentTable";
import Sidebar from '../../../component/Sidebar'
const cx = classNames.bind(MedicalRecordStyle);
function Medicalrecords(){
    return(
    <div className={cx('wrapper-records')}>
        <Sidebar />
        <RecordPatientTable/>
    </div> 
    )
}
export default Medicalrecords