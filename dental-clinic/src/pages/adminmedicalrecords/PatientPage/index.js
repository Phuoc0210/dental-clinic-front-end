import React from 'react'
import classNames from 'classnames/bind'
import PatientTable from '../../../component/PatientTable'
import Sidebar from '../../../component/Sidebar'
import PatientPageStyle from './PatientPageStyle.css'
import { Fragment } from 'react'
import Header from '../../../component/Header'
import Navbar from '../../../component/Navbar'
import Footer from '../../../component/Footer'
const cx = classNames.bind(PatientPageStyle);

function PatientPage(){
    return(
    <div className={cx('wrapper-patients')}>
        <Sidebar />
        <PatientTable/>
    </div>       
    )
}


export default PatientPage