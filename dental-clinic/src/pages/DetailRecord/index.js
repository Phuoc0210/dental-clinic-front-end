import React, { Component } from 'react'
import { useEffect, useState } from 'react'
import classNames from 'classnames/bind';
import DetailRecordStyle from './DetailRecordStyle.css'
const cx = classNames.bind(DetailRecordStyle);


function DetailRecord() {

	return (
		<div className={cx('wrapper-table')}>
			<div className={cx('name-form')}>Quản lý hồ sơ bệnh án</div>
			<form>
				<table className={cx('information-form')}>
					<tr>
						<td className={cx('col-1')}><label for="name">Họ tên:</label></td>
						<td>
							<input type="text" id="name" className={cx('name-input')} value="John"></input>
							<label for="sex">Giới tính:</label>
							<select className={cx('sex-input')} id="sex">
								<option value="Nam">Nam</option>
								<option value="Nữ">Nữ</option>
								<option value="Khác">Khác</option>
							</select>
						</td>
					</tr>
					<tr>
						<td><label for="birth">Ngày sinh:</label></td>
						<td>
							<input type="text" id="birth" className={cx('birth-input')} value="Doe"></input>
							<label className={cx('ethnic-col')} for="ethnic">Dân tộc:</label>
							<input type="text" id="ethnic" className={cx('ethnic-input')} value="Doe"></input>
						</td>
					</tr>
					<tr>
						<td><label for="type">Loại bệnh:</label></td>
						<select className={cx('type-disease-input')} id="type">
							<option value="Viêm lợi">Viêm lợi</option>
							<option value="Đau răng">Đau răng</option>
							<option value="Khác">Khác</option>
						</select>
					</tr>
					<tr>
						<td><label for="insurance">Mã BHXH:</label></td>
						<td>
							<input type="text" id="insurance" className={cx('insurance-input')} value="Doe"></input>
							<label for="subject">Đối tượng:</label>
							<input type="text" id="subject" className={cx('subject-input')} value="Doe"></input>
						</td>
					</tr>
					<tr>
						<td><label for="org">Cơ quan công tác:</label></td>
						<td><input type="text" id="org" className={cx('type-input')} value="Doe"></input></td>
					</tr>
					<tr>
						<td><label for="address">Địa chỉ:</label></td>
						<td><input type="text" id="address" className={cx('type-input')} value="Doe"></input></td>
					</tr>
					<tr>
						<td><label for="checkin">Chẩn đoán lúc vào viện:</label></td>
						<td><input type="text" id="checkin" className={cx('predict-in-input')} value="Doe"></input></td>
					</tr>
					<tr>
						<td><label for="checkout">Chẩn đoán lúc ra viện:</label></td>
						<td><input type="text" id="checkout" className={cx('predict-out-input')} value="Doe"></input></td>
					</tr>
					<tr>
						<td><label for="summary">Tóm tắt bệnh án:</label></td>
						<td><input type="text" id="summary" className={cx('summary-input')} value="Doe"></input></td>
					</tr>
					<tr>
						<td><label for="inclusion">Kết luận:</label></td>
						<td><input type="text" id="inclusion" className={cx('summary-input')} value="Doe"></input></td>
					</tr>
					<tr>
						<td></td>
						<td><label for="exam">Ngày khám:</label>
							<input type="text" id="exam" value="Doe"></input>
							<label className={cx('re-exam-col')} for="re-xam">Ngày tái khám:</label>
							<input type="text" id="re-exam" value="Doe"></input></td>
					</tr>
				</table>
				<input type="submit" className={cx('submit-button')} value="Lưu"></input>
			</form>
		</div>
	)
}


export default DetailRecord