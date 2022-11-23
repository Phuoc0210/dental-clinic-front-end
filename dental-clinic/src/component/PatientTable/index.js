import React from 'react'
import classNames from 'classnames/bind'
import {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import PatientTableStyle from './PatientTableStyle.css'

const cx = classNames.bind(PatientTableStyle);

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
    const navigate = useNavigate();
    function handleCLick(e){
        var rowId = 
            e.target.parentNode.id;
        navigate(`/admin/record/${rowId}`)
    }
    return(
        <div className={cx('wrapper-table')}>
            <div className={cx('name-table')}>Quản lý hồ sơ bệnh án</div>
            <table className={cx('patients-table')}>
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
                            style={{backgroundColor: patient['p_id'] % 2 == 1 ? "DCF2FF" : "#B8E3FF"}}
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

export default PatientTable