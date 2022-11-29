import React from 'react'
import headerStyle from './HeaderStyle.css'
import LogoImage from '../../assets/Logo.png'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import classNames from 'classnames/bind'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../../store'
const cx = classNames.bind(headerStyle);


function Header() {
    const [state, dispath] = useStore()
    console.log(state)
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
                    <button className={cx('btn btnsignin',(state.isLogin)?'off':'turn')} 
                            onClick={() => (navigate('/login'))}>Sign In</button>
                    <button className={cx('btnavatar',(state.isLogin)?'turn':'off')}><BsFillPersonFill className={cx('avatar')}
                            onClick={()=>(navigate(`/account/history-make-appointment`))}/></button>
                </div>
            </div>
        </header>

    )
}

export default Header

