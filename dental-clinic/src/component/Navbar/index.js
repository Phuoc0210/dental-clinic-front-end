import React, { useState } from 'react'
import classNames from 'classnames/bind'
import navbarStyle from './NavbarStyle.css'
import {Link} from 'react-router-dom'
const cx = classNames.bind(navbarStyle);

function Navbar() {
    const [isAdmin,setIsAdmin] =useState(false);
    const role='doctor'
    return(
            <>
        <nav className={cx('nav')}>
            <ul className={cx('container')}>
                <li className={cx('tab')}>
                    <Link to="/homepage">Trang chủ</Link>
                </li>
                <li  className={cx('tab')}>
                    <Link to="#">Dịch vụ</Link>
                </li>
                <li className={cx('tab')}>
                    <Link to="#">Bảng giá</Link>
                </li>
                <li className={cx('tab')}>
                    <Link to="#">Blog</Link>
                </li>
                <li className={cx('tab admin',(true)?'turn':'off')} >
                    <Link to={`/admin/${role}`}>Quản lý</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar