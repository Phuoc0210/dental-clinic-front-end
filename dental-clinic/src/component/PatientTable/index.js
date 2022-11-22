import React from 'react'
import {useEffect,useState} from 'react'

import './PatientTable.css'

function PatientTable(){
    const url = 'https://dental-clinic-project.herokuapp.com/api/patient_list'
    const [patients,setPatient] = useState([])
    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then( patients => {
            setPatient(patients)
    }
    );
    },[])
    return(
        <div className='wrapper-table'>
            <div className='name-table'>Quản lý hồ sơ bệnh án</div>
            <table className='patients-table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên</th>
                        <th>Giới tính</th>
                        <th>Ngày sinh</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        patients.map( patient => (
                            <tr key={patient['p_id']} id={patient['p_id']} 
                            onClick={handleCLick}
                            >
                                <td>{patient['p_id']}</td>
                                <td>{patient['p_name']}</td>
                                <td>{patient['p_sex']}</td>
                                <td>{patient['p_dateOB']}</td>
                                <td>{patient['p_email']}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

function handleCLick(e){
    var rowId = 
        e.target.parentNode.id;
        alert(rowId);
}


export default PatientTable