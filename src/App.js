import React, { Component } from "react";
import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";
import "./App.css";
import _ from "lodash";
import { connect } from "react-redux";
import * as actions from "./components/actions/index";

// LEASON = CRUD
class App extends Component {
	// // trạng thái đầu tiên khi vào web | khoi tao
	// constructor (props) {
	//     super(props);
	//     this.state = {
	//     }
	// }

	// toggle rudex
	onToggleForm = () => {
		var { itemEditing } = this.props;
		if (itemEditing && itemEditing.id !== "") {
			this.props.onOpenForm();
		} else {
			this.props.onToggleForm();
		}
		this.props.onClearTask({
			id: "",
			name: "",
			status: false,
		});
	};
	// ============================= //
	render() {
		// this.props = reducer (in folder) or state (chuyen no thanh props) dược lưu trong store
		var { isDisplayForm } = this.props; // nho khai bao { connect } from react-redux va map

		// check if Form is displayed or not display

		return (
			<div className="container">
				<div className="text-center mt-2">
					<h2>Quản Lý Công Việc</h2>
					<hr />
				</div>
				<div className="row">
					<div
						className={
							isDisplayForm === true
								? "col-xl-4 col-sm-4 col-md-4 col-lg-4"
								: ""
						}
					>
						{/* Form */}
						<TaskForm />
						{/* end card */}
					</div>
					{/* end col */}
					{/* if Form ko hien thi keo col la 12 con ko thi la 8 */}
					<div
						className={
							isDisplayForm == true
								? "col-xl-8 col-sm-8 col-md-8 col-lg-8"
								: "col-xl-12 col-sm-12 col-md-12 col-lg-12"
						}
					>
						{/* Event show Form */}
						<button
							type="button"
							className="btn btn-primary"
							// Xu ly su kien open & close add form
							onClick={this.onToggleForm}
						>
							<span className="fa fa-plus"></span> Thêm Công Việc
						</button>

						{/* <button 
                            type="button" 
                            className='btn btn-danger ms-2'
                            onClick = { this.onGenerateData }
                            >
                          Generate Date
                        </button> */}

						{/* Search - Sort */}
						{/* onSearch = name */}
						<TaskControl />
						{/* List */}
						{/* nho props trong component Tasklist */}
						<TaskList />

						{/* row of col */}
					</div>
					{/* end col */}
				</div>
				{/* end row */}
			</div>
			// end container
		);
	}
}

/*
một hàm dùng để liên kết trạng thái (state) của Redux với các props của các thành phần (components)
trong ứng dụng React. Nó là một trong những phương thức của thư viện React Redux, giúp cải thiện 
khả năng quản lý trạng thái trong ứng dụng React.
*/

const mapStateToProps = (state) => {
	return {
		isDisplayForm: state.isDisplayForm,
		itemEditing: state.itemEditing,
	};
};

// thuc hien cac action
const mapDispatchToProps = (dispatch, props) => {
	return {
		onToggleForm: () => {
			dispatch(actions.toggleForm());
		},
		// Fix ToggleForm => de xoa thong tin edit khi xu ly button them cong viec trong tinh trang sua cong viec
		// Khi dong closeForm, du ko sua gi cung cap nhap editTask (van du lieu cu).
		onClearTask: (task) => {
			dispatch(actions.editTask(task));
		},

		onOpenForm: () => {
			dispatch(actions.openForm());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
