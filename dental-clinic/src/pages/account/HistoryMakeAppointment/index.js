import React from "react";
import classNames from "classnames/bind";
import HistoryMAStyle from './HistoryMAStyle.css'
import SidebarAccount from "../../../component/SidebarAccount";
import HistoryMATable from "../../../HistoryMATable";
import { useStore } from "../../../store";
const cx = classNames.bind(HistoryMAStyle);

function HistoryMakeAppointment(){
    const [state, dispath] = useStore()
    return (
        <div className={cx('wrapper-history')}>
            <SidebarAccount/>
            {state.userRole === "patient" && <HistoryMATable/>}
        </div>
    )
}

export default HistoryMakeAppointment