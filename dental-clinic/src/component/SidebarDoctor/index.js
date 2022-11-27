import React from "react";
import classNames from "classnames/bind";
import * as BsIcons from "react-icons/bs"
import {Link} from 'react-router-dom'
import sidebardoctorStyle from './SidebarDoctorStyle.css'

const cx = classNames.bind(sidebardoctorStyle);

function SidebarDoctor() {
    return(
        <nav className={cx("sidebar")}>
            <ul className={cx("menu")}>
            <li>
                    <Link className={cx('option')} to="#" >
                        <BsIcons.BsFillPersonFill/> 
                        <span className={cx('o')}> Lịch làm việc</span>
                    </Link>
                </li>
                <li>
                    <Link className={cx('option')} to="#" >
                        <BsIcons.BsPencilSquare/> 
                        <span> Quản lý hồ sơ bệnh án</span>
                    </Link>
                </li>
                <li>
                    <Link className={cx('option')} to="#" >
                        <BsIcons.BsFillCalendarFill/> 
                        <span> Quản lý Blog</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
    
}
export default SidebarDoctor