import React from "react";
import classNames from 'classnames/bind'
import footerStyle from './FooterStyle.css'
import {AiFillInstagram,AiFillMail} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {  BsYoutube} from 'react-icons/bs'
import Logo from '../../assets/Logo.png'
import Schedule from '../../assets/schedule.png'

const cx = classNames.bind(footerStyle);

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
                            <span className={cx('title-footer')}>Về Dr.Strange</span>
                            <span>Về chúng tôi</span>
                            <span>Về đội ngũ bác sĩ</span>
                            <span>Câu chuyện khách hàng</span>
                            <span>Kiến thức nha khoa</span>
                            <span>Hoạt động</span>
                        </div>
                        <div className={cx("content-about-contact")}>
                            <span className={cx('title-footer')}>Liên Hệ</span>
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
                            <FaFacebookF className={cx('icon-footer')}/>
                            <BsYoutube className={cx('icon-footer')}/>
                            <AiFillInstagram className={cx('icon-footer')}/>
                            <AiFillMail className={cx('icon-footer')}/>
                        </div>
            </div>
        </div>
        </footer>
    )
}
export default Footer