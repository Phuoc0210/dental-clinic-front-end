import React from "react";
import classNames from "classnames/bind";
import {RiLogoutBoxRLine} from "react-icons/ri"
import {BsPersonCircle} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import SidebarAccountStyle from './SidebarAccountStyle.css'

const cx = classNames.bind(SidebarAccountStyle);

function SidebarAccount() {
    return(
        <nav className={cx("sidebar-account")}>
            <ul className={cx("menu")}>
                <li className={cx('header-sidebar')}>
                    <BsPersonCircle className={cx('avatar-sidebar')}/> 
                    <span>User name</span>
                </li>
                <li>
                    <Link className={cx('option')} to="#" >
                        Thông tin tài khoản
                    </Link>
                </li>
                <li>
                    <Link className={cx('option')} to="#" >
                        Lịch sửa đặt lịch
                    </Link>
                </li>
                <li>
                    <Link className={cx('option')} to="/account/history-make-appointment" >
                        Lịch sử khám bệnh
                    </Link>
                </li>
                <li>
                    <Link className={cx('option')} to="#" >
                        Đăng xuất <RiLogoutBoxRLine/>
                    </Link>
                </li>
            </ul>
        </nav>
    )
    
}
export default SidebarAccount