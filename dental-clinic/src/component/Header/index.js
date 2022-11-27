import React, { useEffect, useRef } from 'react'
import headerStyle from './HeaderStyle.css'
import LogoImage from '../../assets/Logo.png'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import classNames from 'classnames/bind'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const cx = classNames.bind(headerStyle);


function Header() {
    const location = useLocation()
    const [isLogin,setIsLogin] =useState(false);
    const navigate = useNavigate()
    useEffect(()=>{
        if (location.state != null) {
            setIsLogin(!isLogin)
            console.log(location.state)
        }
    },[location.state])

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
                    <button className={cx('btn btnsignin',(isLogin)?'off':'turn')} 
                            onClick={() => (navigate('/login'))}>Sign In</button>
                    <button className={cx('btnavatar',(isLogin)?'turn':'off')}><BsFillPersonFill className={cx('avatar')}
                            onClick={()=>(navigate(`/account/history-make-appointment`,{state: location.state}))}/></button>
                </div>
            </div>
        </header>

    )
}

export default Header

