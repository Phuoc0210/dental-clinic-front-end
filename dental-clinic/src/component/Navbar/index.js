import React from 'react'
import classNames from 'classnames/bind'
import navbarStyle from './NavbarStyle.css'
import {Link} from 'react-router-dom'
import { useStore } from '../../store'
const cx = classNames.bind(navbarStyle);

function Navbar() {
    const [state, dispath] = useStore()
    return(
            <>
        <nav className={cx('nav')}>
            <ul className={cx('container')}>
                <li className={cx('tab')}>
                    <Link to="/homepage">Trang chủ</Link>
                </li>
                <li  className={cx('tab')}>
                    <Link to="/service">Dịch vụ</Link>
                </li>
                <li className={cx('tab')}>
                    <Link to="/price">Bảng giá</Link>
                </li>
                <li className={cx('tab')}>
                    <Link to="/blog">Blog</Link>
                </li>
                <li className={cx('tab admin',(state.isAdmin)?'turn':'off')} >
                    <Link to={`/admin/${state.userRole}`}>Quản lý</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar