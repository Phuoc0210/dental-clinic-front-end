import React from 'react'
import classNames from 'classnames/bind'
import navbarStyle from './NavbarStyle.css'
import {Link, Route , Routes} from 'react-router-dom'
import HomepageIndex from '../../pages/homepage/homepageIndex';
import Medicalrecords from '../../pages/adminmedicalrecords/Medicalrecords/index.js';
import PatientPage from '../../pages/adminmedicalrecords/PatientPage';
import HistoryMakeAppointment from '../../pages/account/HistoryMakeAppointment';
import Login from '../../pages/user/login/login';

const cx = classNames.bind(navbarStyle);
const isAdmin = true
function Navbar() {
    return(
        <>
        <nav className={cx('nav')}>
            <ul className={cx('container')}>
                <li className={cx('tab')}>
                    <Link to="/">Trang chủ</Link>
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
                <li className={cx('tab admin',(isAdmin)?'turn':'off')} >
                    <Link to="/admin">Quản lý</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar