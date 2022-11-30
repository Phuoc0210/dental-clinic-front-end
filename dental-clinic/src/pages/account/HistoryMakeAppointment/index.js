import React, { useState } from "react";
import classNames from "classnames/bind";
import HistoryMAStyle from './HistoryMAStyle.css'
import SidebarAccount from "../../../component/SidebarAccount";
import HistoryMATable from "../../../HistoryMATable";
import { actions, useStore } from "../../../store";
import { useNavigate } from "react-router-dom";
import Dialog from "../../../component/Dialog/Dialog";
const cx = classNames.bind(HistoryMAStyle);

function HistoryMakeAppointment(){
    const [dialog,setDialog] = useState({
        message:'',
        isLoading: false
    })
    const navigate = useNavigate()
    const [state, dispath] = useStore()
    const handleDialog = (message, isLoading) =>{
        setDialog(
            {
                message,
                isLoading,
            }
        )
    }
    function handleCLick(){
        handleDialog("Bạn muốn đăng xuất hay không?", true)
    }
    const Choosen = (chosoe) => {
        if(chosoe){
            dispath(actions.setIsLogin(false))
            dispath(actions.setIsAdmin(false))
            dispath(actions.setUserName(''))
            dispath(actions.setUserRole(''))
            handleDialog( "", false)
            navigate('/homepage')
        } else{
            handleDialog( "", false)
        }
    }
    return (
        <div className={cx('wrapper-history')}>
            <SidebarAccount handleCLick={handleCLick}/>
            {state.userRole === "patient" && <HistoryMATable/>}
            { dialog.isLoading && <Dialog onDialog={Choosen} message = {dialog.message}/>}
        </div>
    )
}

export default HistoryMakeAppointment