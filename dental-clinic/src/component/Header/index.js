import React from 'react'
import './Style.css'
import LogoImage from '../../assets/Logo.png'
import {AiOutlineSearch} from 'react-icons/ai'
function Header() {
    return(
        <header className='wrapper-header'>
           <div className='inner-header'>
                <div className='logo'>
                        <img src={LogoImage} alt='logo'></img>
                </div>
                <div className='search'>
                    <input type='search' className='input-search'
                        placeholder='Nhập thông tim tìm kiếm...'>    
                    </input>
                    <button className='btn-search'> 
                        <AiOutlineSearch className='oke'/>  
                    </button>
                </div>
                <div className='btns'>
                    <button className="btn btncontact">Contact</button>
                    <button className='btn btnsignin'>Sign In</button>
                </div>
            </div>
        </header>
    )
}

export default Header