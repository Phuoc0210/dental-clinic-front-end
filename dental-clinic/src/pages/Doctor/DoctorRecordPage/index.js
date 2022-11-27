import React from "react";
import classNames from "classnames/bind";
import DoctorRecordStyle from './DoctorRecordStyle.css'
import SidebarDoctor from "../../../component/SidebarDoctor";
import DoctorRecordTable from "../../../component/DoctorRecordTable";
const cx = classNames.bind(DoctorRecordStyle);
function DoctorRecordPage(){
    return(
    <div className={cx('wrapper-records-doctor')}>
        <SidebarDoctor />
        <DoctorRecordTable/>
    </div> 
    )
}
export default DoctorRecordPage