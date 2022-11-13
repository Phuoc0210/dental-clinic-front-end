import React, { Component } from 'react';
import './Menu.css';
import {
	ProSidebar,
	Menu,
	MenuItem,
	SidebarHeader,
	SidebarFooter,
	SidebarContent,
	Sidebar
} from "react-pro-sidebar";

class Smenu extends Component {
	constructor(props) {
		super(props);

	}


	render = () => {
		return (
			<div>
				<div class="sidebar">
					<ul>
						<li><a href=""><i className='fa fa-user'></i>Quản lý tài khoản</a></li>
						<li><a href=""><i className='fa fa-edit'></i>Quản lý Blogs</a></li>
						<li className='nowPage'><a href=""><i className='fa fa-address-card'></i>Quản lý đặt lịch</a></li>
						<li><a href=""><i className='fa fa-file-text'></i>Quản lý hồ sơ bệnh án</a></li>
						<li><a href=""><i className='fa fa-calendar'></i>Quản lý lịch làm việc</a></li>
					</ul>
				</div>
			</div>

		)
	}
}

export default Smenu