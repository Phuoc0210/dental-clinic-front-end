import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import DetailRecordStyle from './DetailRecordStyle.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useStore } from '../../store';
import Dialog from '../../component/Dialog/Dialog';

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
	const chooseRef = useRef()
	const [dID,setDID] = useState()
	const [dease,setDease] = useState()
	const [inDiagnose,setInDiagnose] = useState()
	const [outDiagnose,seOutDiagnose] = useState()
	const [conclusion,setConclusion] = useState()
	const [desc,setDesc] = useState()
	const [examineDay,setExamineDay] = useState()
	const [reExamineDay,setReExamineDay] = useState()
	const [dialog,setDialog] = useState({
        message:'',
        isLoading: false
    })
	const handleDialog = (message, isLoading) =>{
        setDialog(
            {
                message,
                isLoading,
            }
        )
    }
	const areSureDelete = (chosoe) => {
        if(chosoe){
            handleDialog( "", false)
			if(chooseRef.current === 'update'){
				callApiUpateRecord()
			} else {
				callApiAddRecord()
			}
        } else{
            handleDialog( "", false)
        }
    }
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
			"p_id": param.userID,
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
			"rec_id": Number(param.recID),
			"rec_dease": dease,
			"rec_desc": desc,
			"rec_indiagnose": inDiagnose,
			"rec_outdiagnose": outDiagnose,
			"rec_conclusion": conclusion
		 }
		 console.log(data)
         const option = {
             method: "POST",
             
             //headers: {     "Content-Type": "application/json"       },
             body: JSON.stringify(data)
         }
         fetch( url, option)
             .then(response => response.json())
             .then( result => {
                 console.log(result)
             }
         )
		 console.log(data)
	}

	const navigate = useNavigate()
	function handleSubmit() {
		if (param.action === 'update'){
			handleDialog( "B???n c?? ch???c mu???n c???p nh???t b???nh ??n n??y?", true)
			chooseRef.current = 'update'
			//callApiUpateRecord()
			//navigate(`/admin/doctor/record/${param.userID}`)
		}
		else {
			handleDialog( "B???n c?? ch???c mu???n th??m b???nh ??n n??y?", true)
			chooseRef.current = 'add'
			//callApiAddRecord()
			//navigate(`/admin/doctor/record/${param.userID}`)
		}
	}
	

	return (
		<div className={cx('wrapper-detail-record')}>
			<div className={cx('inner-detail-record')}>
				<div className={cx('title-detail-record')}>
					H??? s?? b???nh ??n nha khoa
				</div>
				<div className={cx('container-detail-record')}>
					<form className={cx('form-record')}>
						<h5 className={cx('title-part')}>1. H??nh ch??nh</h5>
						<label className={cx('title-input-record')}>H??? v?? t??n</label>
						<label className={cx('info-readonly')}>{userProfile['p_name']}</label>
						
						<div className={cx('container-dd')}>
								<div>
									<label className={cx('title-input-record')}>Ng??y sinh:</label>
									<label className={cx('info-readonly')}>{userProfile['p_dateOB']}</label>
								</div>
								
								<div>
									<label className={cx('title-input-record')}>Gi???i t??nh:</label>
									<label className={cx('info-readonly')}>{userProfile['p_sex']}</label>
								</div>

								<div>
									<label className={cx('title-input-record')}>D??n t???c:</label>
									<label className={cx('info-readonly')}>{userProfile['p_ethnic']}</label>
								</div>
						</div>

						<label className={cx('title-input-record')}>S??? ??i???n tho???i</label>
						<label className={cx('info-readonly')}>{userProfile['p_phnu']}</label>


						<label className={cx('title-input-record')}>M?? BHXH</label>
						<label className={cx('info-readonly')}>{userProfile['p_BHXH'] || '462 038 1625'}</label>

						<label className={cx('title-input-record')}>?????a ch???</label>
						<label className={cx('info-readonly')}>{userProfile['p_address']}</label>



						<h5 className={cx('title-part')}>2. B???nh ??n</h5>
						<label className={cx('title-input-record')}>Ti???n s??? b???nh</label>
						<input className={cx('input-record')}
							placeholder='Ti???n s??? b???nh'
							defaultValue={desc}
							onChange={ e => setDesc(e.target.value) }
                        />
						<label className={cx('title-input-record')}>D???ch v??? ??i???u tr???</label>
						<input className={cx('input-record')}
							placeholder='D???ch v??? ??i???u tr???'
							defaultValue={dease}
							onChange={ e => setDease(e.target.value) }
                        />
						<label className={cx('title-input-record')}>Ph????ng ph??p ????? xu???t</label>
						<input className={cx('input-record')}
							placeholder='Ph????ng ph??p ????? xu???t'
							defaultValue={inDiagnose}
							onChange={ e => setInDiagnose(e.target.value) }
                        />
						<label className={cx('title-input-record')}>T??nh tr???ng ??i???u tr???</label>
						<input className={cx('input-record')}
							placeholder='T??nh tr???ng ??i???u tr???'
							defaultValue={outDiagnose}
							onChange={ e => seOutDiagnose(e.target.value) }
                        />
						<label className={cx('title-input-record')}>T??nh tr???ng b???nh nh??n</label>
						<input className={cx('input-record')}
							placeholder='T??nh tr???ng b???nh nh??n'
							defaultValue={conclusion}
							onChange={ e => setConclusion(e.target.value) }
                        />

						<label className={cx('title-input-record')}>Ng??y kh??m</label>
						<input className={cx('input-record')}
							type = "date"
							placeholder='Ng??y kh??m'
							defaultValue={examineDay}
							onChange={ e => setExamineDay(e.target.value) }
                        />

						<label className={cx('title-input-record')}>Ng??y t??i kh??m</label>
						<input className={cx('input-record')}
							type = "date"
							placeholder='Ng??y t??i kh??m'
							defaultValue={reExamineDay}
							onChange={ e => setReExamineDay(e.target.value) }
                        />

					</form>
					{isInfo && <button onClick={() => handleSubmit()}
					className={cx('btn-submit-record')}>L??u</button>}
				</div>
			</div>
			{ dialog.isLoading && <Dialog onDialog={areSureDelete} message = {dialog.message}/>}
		</div>
	)
}


export default DetailRecord