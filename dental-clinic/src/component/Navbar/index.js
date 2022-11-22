import React from 'react'
import './Style.css'
import {Link} from 'react-router-dom'

function Navbar() {
    return(
        <nav className='nav'>
            <ul className='container'>
                <li className='tab'>
                    <Link to="/">Trang chủ</Link>
                </li>
                <li  className='tab'>
                    <Link to="#">Dịch vụ</Link>
                </li>
                <li className='tab'>
                    <Link to="#">Bảng giá</Link>
                </li>
                <li className='tab'>
                    <Link to="#">Blog</Link>
                </li>
                <li className='tab'>
                    <Link to="#">Quản lý</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar