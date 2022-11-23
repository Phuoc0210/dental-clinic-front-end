import React from "react";
import './Slidebar.css'
import * as BsIcons from "react-icons/bs"
import {Link} from 'react-router-dom'

function Slidebar() {
    return(
        <nav className="sidebar">
            <ul className="menu">
            <li>
                    <Link to="#" >
                        <BsIcons.BsFillPersonFill/> 
                        <span>Quản lý tài khoản</span>
                    </Link>
                </li>
                <li>
                    <Link to="#" >
                        <BsIcons.BsPencilSquare/> 
                        <span>Quản lý blogs</span>
                    </Link>
                </li>
                <li>
                    <Link to="#" >
                        <BsIcons.BsFillCalendarFill/> 
                        <span>Quản lý đặt lịch</span>
                    </Link>
                </li>
                <li>
                    <Link to="#" >
                        <BsIcons.BsFillFileEarmarkFill/> 
                        <span>Quản lý hồ sơ bệnh án</span>
                    </Link>
                </li>
                <li>
                    <Link to="#" >
                        <BsIcons.BsClockFill/> 
                        <span>Quản lý lịch làm việc</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
    
}
export default Slidebar