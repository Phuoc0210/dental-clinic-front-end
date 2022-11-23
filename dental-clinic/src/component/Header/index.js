import React, { useEffect } from 'react'
import headerStyle from './HeaderStyle.css'
import LogoImage from '../../assets/Logo.png'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import classNames from 'classnames/bind'
import {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const cx = classNames.bind(headerStyle);

function Header() {
    const location =useLocation()
    const [status,setStatus] =useState(true);
    const navigate = useNavigate()
    return(
        <header className={cx('wrapper-header')}>
           <div className={cx('inner-header')}>
                <div className={cx('logo')}>
                        <img src={LogoImage} alt='logo'></img>
                </div>
                <div className={cx('search')}>
                    <input type='search' className={cx('input-search')}
                        placeholder='Nhập thông tim tìm kiếm...'>    
                    </input>
                    <button className={cx('btn-search')}> 
                        <AiOutlineSearch className={cx('oke')}/>  
                    </button>
                </div>
                <div className={cx('btns')}>
                    <button className={cx("btn btncontact")} >Contact</button>
                    <button className={cx('btn btnsignin',(status)?'turn':'off')} 
                            onClick={()=> navigate('/login')}>Sign In</button>
                    <button className={cx('btnavatar',(!status)?'turn':'off')}><BsFillPersonFill className={cx('avatar')}
                            onClick={()=>(navigate('/account'))}/></button>
                </div>
            </div>
        </header>
    )
}

export default Header