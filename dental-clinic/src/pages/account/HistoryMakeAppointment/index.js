import React from "react";
import classNames from "classnames/bind";
import HistoryMAStyle from './HistoryMAStyle.css'
import Sidebar from "../../../component/Sidebar";
import HistoryAppointmentTable from "../../../component/HistoryAppointmentTable";
const cx = classNames.bind(HistoryMAStyle);

function HistoryMakeAppointment(){

    return (
        <div className={cx('wrapper-history')}>
            <Sidebar/>
            <HistoryAppointmentTable/>
        </div>
    )
}
export default HistoryMakeAppointment