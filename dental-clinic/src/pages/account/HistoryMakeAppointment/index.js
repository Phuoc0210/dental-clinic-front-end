import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import HistoryMAStyle from './HistoryMAStyle.css'
import SidebarAccount from "../../../component/SidebarAccount";
import HistoryMATable from "../../../HistoryMATable";
import { useLocation } from "react-router-dom";
const cx = classNames.bind(HistoryMAStyle);

function HistoryMakeAppointment(){
    const location = useLocation()
    const data = 
    {
        "username": location.state
    }
    console.log(data)

    const url = 'https://dental-clinic-project.herokuapp.com/api/authentication/get-profile'
    const [account,setaccount] = useState([])

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
            .then( account => {
                setaccount(account.data)
            }
        )
    },[])
    const id = account.id
    return (
        <div className={cx('wrapper-history')}>
            <SidebarAccount userName={account['name']}/>
            <HistoryMATable userId={account.id}/>
        </div>
    )
}

export default HistoryMakeAppointment