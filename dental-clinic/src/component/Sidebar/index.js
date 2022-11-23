import React from "react";
import classNames from "classnames/bind";
import * as BsIcons from "react-icons/bs"
import {Link} from 'react-router-dom'
import sidebarStyle from './SidebarStyle.css'

const cx = classNames.bind(sidebarStyle);

function Sidebar() {
    return(
        <nav className={cx("sidebar")}>
            <ul className={cx("menu")}>
            <li>
                    <Link className={cx('option')} to="#" >
                        <BsIcons.BsFillPersonFill/> 
                        <span className={cx('o')}> Quản lý tài khoản</span>
                    </Link>
                </li>
                <li>
                    <Link className={cx('option')} to="#" >
                        <BsIcons.BsPencilSquare/> 
                        <span> Quản lý blogs</span>
                    </Link>
                </li>
                <li>
                    <Link className={cx('option')} to="#" >
                        <BsIcons.BsFillCalendarFill/> 
                        <span> Quản lý đặt lịch</span>
                    </Link>
                </li>
                <li>
                    <Link className={cx('option')} to="/admin" >
                        <BsIcons.BsFillFileEarmarkFill/> 
                        <span> Quản lý hồ sơ bệnh án</span>
                    </Link>
                </li>
                <li>
                    <Link className={cx('option')} to="#" >
                        <BsIcons.BsClockFill/> 
                        <span> Quản lý lịch làm việc</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
    
}
export default Sidebar