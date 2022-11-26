import React from "react";
import classNames from "classnames/bind";
import HistoryMAStyle from './HistoryMAStyle.css'
import SidebarAccount from "../../../component/SidebarAccount";
import HistoryMATable from "../../../HistoryMATable";
const cx = classNames.bind(HistoryMAStyle);

function HistoryMakeAppointment(){

    return (
        <div className={cx('wrapper-history')}>
            <SidebarAccount/>
            <HistoryMATable/>
        </div>
    )
}
export default HistoryMakeAppointment