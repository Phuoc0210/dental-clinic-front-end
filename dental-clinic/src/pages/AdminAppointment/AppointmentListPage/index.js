import React from "react";
import classNames from "classnames/bind";
import AppointmentListPageStyle from './AppointmentListPageStyle.css'
import Sidebar from '../../../component/Sidebar'
import AppointmentTable from "../../../component/AppointmentTable";
const cx = classNames.bind(AppointmentListPageStyle);
function AppointmentListPage(){
    return(
    <div className={cx('wrapper-appointment')}>
        <Sidebar />
        <AppointmentTable/>
    </div> 
    )
}
export default AppointmentListPage