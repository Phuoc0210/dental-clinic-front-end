import React from "react";
import className from 'classnames/bind'
import styles from './FooterStyle.css'
import {AiFillInstagram,AiFillMail} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {  BsYoutube} from 'react-icons/bs'
import Logo from '../../assets/Logo.png'
import Schedule from '../../assets/schedule.png'

const cx = className.bind(styles);

function Footer(){
    return(
        <footer className={cx("wrapper-footer")}>
             <div className={cx("wrapper-intro")}>
            <div className={cx("container-intro")}>
                        <div className={cx("intro")}>
                            <img src={Logo} alt={cx('logo')}></img>
                            <p>
                            "Tại Dr.Strange, tất cả những dịch vụ đơn giản nhất đều do các bác sỹ đúng chuyên môn, giỏi nghề, nhiều kinh nghiệm tạo ra các “tác phẩm” hoàn mỹ với cảm giác dễ chịu, êm ái.”
                            </p>
                        </div>
                        <div className={cx("schedule")}>
                            <img src={Schedule} alt={cx('schedule')}></img>
                        </div>
                </div>
        </div>
            <div className={cx("wrapper-about")}>
                <div className={cx("container-about")}>
                        <div className={cx("content-about-hospital")}>
                            <ul className={cx("menu")}>
                                <li>Về Dr.Strange</li>
                                <li>
                                    <a href="/">Về chúng tôi</a>
                                </li>
                                <li>
                                    <a href="/">Về đội ngũ bác sĩ</a>
                                </li>
                                <li>
                                    <a href="/">Câu chuyện khách hàng</a>
                                </li>
                                <li>
                                    <a href="/">Kiến thức nha khoa</a>
                                </li>
                                <li>
                                    <a href="/">Hoạt động</a>
                                </li>
                            </ul>
                        </div>
                        <div className={cx("content-about-contact")}>
                            <label>Liên Hệ</label>
                            <p>Mọi thông tin liên hệ, thắc mắc, hỏi đáp, xin liên hệ chúng tôi:</p>
                            <p>
                                <span>Địa chỉ: 66 Tân Sơn Hoà, Phường 2, Quận Tân Bình, Tp. Hồ Chí Minh</span>
                                <br/>
                                <span>Email: info@drstrange.vn</span>
                                <br/>
                                <span>Hotline: 0862 111 318</span>
                            </p>                                                                     
                        </div>
                        <div className={cx('content-about-link')}>
                            <FaFacebookF/>
                            <BsYoutube/>
                            <AiFillInstagram/>
                            <AiFillMail/>
                        </div>
            </div>
        </div>
        </footer>
    )
}
export default Footer