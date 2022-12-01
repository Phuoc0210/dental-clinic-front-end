import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import DetailRecordStyle from './DetailRecordStyle.css'
import { useParams } from 'react-router-dom';
import { useStore } from '../../store';

const cx = classNames.bind(DetailRecordStyle);


function DetailRecord() {

	const [userProfile,setUserProfile] = useState([])
	const param = useParams()
	const url = `https://dental-clinic-project.herokuapp.com/api/authentication/get-patient-detail`
    useEffect(()=>{
        fetch( url + `/${param.userID}`)
            .then(response => response.json())
            .then( profile => {
                setUserProfile(profile.data)
            }
        )
    },[])
	const isInfo = (param.action === 'view') ? false : true;

	const [dID,setDID] = useState()
	const [dease,setDease] = useState()
	const [inDiagnose,setInDiagnose] = useState()
	const [outDiagnose,seOutDiagnose] = useState()
	const [conclusion,setConclusion] = useState()
	const [desc,setDesc] = useState()
	const [examineDay,setExamineDay] = useState()
	const [reExamineDay,setReExamineDay] = useState()
	const urlRec = `https://dental-clinic-project.herokuapp.com/api/medical_record`
	useEffect(
		() => {
			if (param.recID) {
				fetch( urlRec + `/${param.recID}`)
					.then(response => response.json())
					.then( result => result[0])
					.then( data =>  {
						setDease(data['rec_dease'])
						setInDiagnose(data['rec_indiagnose'])
						seOutDiagnose(data['rec_outdiagnose'])
						setConclusion(data['rec_conclusion'])
						setDesc(data['rec_desc'])
						setExamineDay(data['rec_examineday'])
						setReExamineDay(data['rec_reexamineday'])
					})
			}
		}
	,[])

	const [state, dispath] = useStore()
    const urldoc = 'https://dental-clinic-project.herokuapp.com/api/authentication/get-profile'
    const data = 
    {
        "username": state.userName
    }
    const option = {
            method: "POST",
           
            headers: {
                 "Content-Type": "application/json"
                 
            },
            body: JSON.stringify(data)
    }
    useEffect(()=>{
        fetch( urldoc, option)
            .then(response => response.json())
            .then( account => {
                setDID(account.data.id)
            }
        )
    },[])

	function callApiAddRecord() {
		const url = 'https://dental-clinic-project.herokuapp.com/api/add_medical_record'
        const data = { 
			"d_id": dID,
			"rec_dease": dease,
			"p_dateOB": userProfile['p_dateOB'], 
			"p_sex": userProfile['p_sex'], 
			"p_ethnic": userProfile['p_ethnic'], 
			"p_BHXH": userProfile['p_BHXH'],
			"p_address": userProfile['p_address'], 
			"rec_indiagnose": inDiagnose, 
			"rec_outdiagnose": outDiagnose,
			"rec_desc": desc, 
			"rec_conclusion": conclusion, 
			"rec_examineday": examineDay, 
			"rec_reexamineday": reExamineDay
		 }
         const option = {
             method: "POST",
             
             headers: {
                     "Content-Type": "application/json"
                     
             },
             body: JSON.stringify(data)
         }
         fetch( url, option)
             .then(response => response.json())
             .then( result => {
                 console.log(result)
             }
         )
	}

	function callApiUpateRecord(){
		const url = 'https://dental-clinic-project.herokuapp.com/api/record/update'
        const data = { 
			"rec_id": param.recID,
			"rec_dease": dease,
			"rec_desc": desc,
			"rec_indiagnose": inDiagnose,
			"rec_outdiagnose": outDiagnose,
			"rec_conclusion": conclusion
		 }
		 console.log(data)
         const option = {
             method: "POST",
             
             headers: {
                     "Content-Type": "application/json"
                     
             },
             body: JSON.stringify(data)
         }
         fetch( url, option)
             .then(response => response.json())
             .then( result => {
                 console.log(result)
             }
         )
	}

	function handleSubmit() {
		if(dease && desc && inDiagnose && outDiagnose && conclusion && examineDay && reExamineDay)
		{
			if (param.action === 'update'){
				callApiUpateRecord()
			}
			else {
				callApiAddRecord()
			}
		}
		else {
			alert()
		}
	}


	return (
		<div className={cx('wrapper-detail-record')}>
			<div className={cx('inner-detail-record')}>
				<div className={cx('title-detail-record')}>
					Hồ sơ bệnh án nha khoa
				</div>
				<div className={cx('container-detail-record')}>
					<form className={cx('form-record')}>
						<h5 className={cx('title-part')}>1. Hành chánh</h5>
						<label className={cx('title-input-record')}>Họ và tên</label>
						<label className={cx('info-readonly')}>{userProfile['p_name']}</label>
						
						<div className={cx('container-dd')}>
								<div>
									<label className={cx('title-input-record')}>Ngày sinh:</label>
									<label className={cx('info-readonly')}>{userProfile['p_dateOB']}</label>
								</div>
								
								<div>
									<label className={cx('title-input-record')}>Giới tính:</label>
									<label className={cx('info-readonly')}>{userProfile['p_sex']}</label>
								</div>

								<div>
									<label className={cx('title-input-record')}>Dân tộc:</label>
									<label className={cx('info-readonly')}>{userProfile['p_ethnic']}</label>
								</div>
						</div>

						<label className={cx('title-input-record')}>Số điện thoại</label>
						<label className={cx('info-readonly')}>{userProfile['p_phnu']}</label>


						<label className={cx('title-input-record')}>Mã BHXH</label>
						<label className={cx('info-readonly')}>{userProfile['p_BHXH'] || '462 038 1625'}</label>

						<label className={cx('title-input-record')}>Địa chỉ</label>
						<label className={cx('info-readonly')}>{userProfile['p_address']}</label>



						<h5 className={cx('title-part')}>2. Bệnh án</h5>
						<label className={cx('title-input-record')}>Tiền sử bệnh</label>
						<input className={cx('input-record')}
							placeholder='Tiền sử bệnh'
							defaultValue={desc}
							onChange={ e => setDesc(e.target.value) }
                        />
						<label className={cx('title-input-record')}>Dịch vụ điều trị</label>
						<input className={cx('input-record')}
							placeholder='Dịch vụ điều trị'
							defaultValue={dease}
							onChange={ e => setDease(e.target.value) }
                        />
						<label className={cx('title-input-record')}>Phương pháp đề xuất</label>
						<input className={cx('input-record')}
							placeholder='Phương pháp đề xuất'
							defaultValue={inDiagnose}
							onChange={ e => setInDiagnose(e.target.value) }
                        />
						<label className={cx('title-input-record')}>Tình trạng điều trị</label>
						<input className={cx('input-record')}
							placeholder='Tình trạng điều trị'
							defaultValue={outDiagnose}
							onChange={ e => seOutDiagnose(e.target.value) }
                        />
						<label className={cx('title-input-record')}>Tình trạng bệnh nhân</label>
						<input className={cx('input-record')}
							placeholder='Tình trạng bệnh nhân'
							defaultValue={conclusion}
							onChange={ e => setConclusion(e.target.value) }
                        />

						<label className={cx('title-input-record')}>Ngày khám</label>
						<input className={cx('input-record')}
							type = "date"
							placeholder='Ngày khám'
							defaultValue={examineDay}
							onChange={ e => setExamineDay(e.target.value) }
                        />

						<label className={cx('title-input-record')}>Ngày tái khám</label>
						<input className={cx('input-record')}
							type = "date"
							placeholder='Ngày tái khám'
							defaultValue={reExamineDay}
							onChange={ e => setReExamineDay(e.target.value) }
                        />

					</form>
					{isInfo && <button onClick={() => handleSubmit()}
					className={cx('btn-submit-record')}>Lưu</button>}
				</div>
			</div>
		</div>
	)
}


export default DetailRecord