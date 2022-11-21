import React, { Component } from 'react';
import './table_style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAndroidAlt } from '@fortawesome/free-solid-svg-icons';


const users = [
	{ id: '001', name: 'Anil', contact: '0907218', time: '111', room: 'b.01', delete: 'X', appr: false },
	{ id: '002', name: 'Burce', contact: '04563', time: '222', room: 'b.02', delete: 'X', appr: false },
	{ id: '003', name: 'Peter', contact: '095232', time: '111', room: 'b.01', delete: 'X', appr: false },
	{ id: '004', name: 'Sam', contact: '09325326', time: '777', room: 'b.03', delete: 'X', appr: false },
	{ id: '005', name: 'Burce', contact: '04563', time: '222', room: 'b.02', delete: 'X', appr: false },
	{ id: '006', name: 'Peter', contact: '095232', time: '111', room: 'b.01', delete: 'X', appr: false },
	{ id: '007', name: 'Sam', contact: '09325326', time: '777', room: 'b.03', delete: 'X', appr: false },
	{ id: '008', name: 'Burce', contact: '04563', time: '222', room: 'b.02', delete: 'X', appr: false },
	{ id: '009', name: 'Peter', contact: '095232', time: '111', room: 'b.01', delete: 'X', appr: false },
	{ id: '010', name: 'Sam', contact: '09325326', time: '777', room: 'b.03', delete: 'X', appr: false },
]

class Table extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: users
		}
	}

	handleDelete = (record) => {
		let { users } = this.state
		const newUsers = users.filter((item) => item.id !== record.id)
		console.log(newUsers)
		this.setState({users: newUsers})
		console.log(this.state.users)
	}

	handleApprove = (record) => {
		let {users} = this.state
		for (var i in users) {
			if (users[i].id === record.id) {
				users[i].appr = true;
				break;
			}
		}
		this.setState({users: users})
		console.log(this.state.users)
	}

	render_table = () => {
		let { users } = this.state;
		return users.map((user, idx) => {
			return (
				<tr style={{backgroundColor: user.appr ? "#88fdab" : "#DCF2FF"}}>
					<td>{user.id}</td>
					<td>{user.name}</td>
					<td>{user.contact}</td>
					<td>{user.time}</td>
					<td>{user.room}</td>
					<td><button class="btn closeBtn" onClick={() => this.handleDelete(user)}><i class="fa fa-close"></i></button></td>
					<td><button class="btn checkBtn" onClick={() => this.handleApprove(user)}><i class="fa fa-check"></i></button></td>
				</tr>
			)
		})
	}

	render = () => {
		return (
			<div>
				<h1>QUẢN LÝ ĐẶT LỊCH</h1>
				<div class="form-group has-feedback">
					<input type="text" class="form-control" placeholder="Nhập tên người đặt lịch..." />
					<i class="glyphicon glyphicon-search form-control-feedback" ></i>
				</div>
				<div class="table-wrapper-scroll-y my-custom-scrollbar">
					<table>
						<thead>
							<tr>
								<th>ID</th>
								<th>Tên người đặt lịch</th>
								<th>Số điện thoại</th>
								<th>Thời gian</th>
								<th>Phòng</th>
								<th>Xóa</th>
								<th>Duyệt</th>
							</tr>
						</thead>
						<tbody>
							{
								this.render_table()
							}
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}

export default Table