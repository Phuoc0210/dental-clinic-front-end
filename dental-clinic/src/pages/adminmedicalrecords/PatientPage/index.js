import React from 'react'
import PatientTable from '../../../component/PatientTable'
import Slidebar from '../../../component/Slidebar'
import './PatientPage.css'
function Patients(){
    return(
        <div className='wrapper-patients'>
            <Slidebar />
            <PatientTable/>
        </div>            
    )
}


export default Patients