
import React, {Component} from 'react';
import { Connect, connect } from 'react-redux';
import * as actions from './actions/index';


class TaskForm extends Component {
    
    constructor(props) {
        super(props);
        // this.state = {
        //     id: '',
        //     name: '',
        //     status: false
        // };
    }

    componentDidMount () {
        if(this.props.itemEditing && this.props.itemEditing!==null) {
            this.setState({
                
                id : this.props.itemEditing.id,
                name : this.props.itemEditing.name,
                status : this.props.itemEditing.status
            });
        } else {
            this.onClear();
        }
    }

    // da duoc thay the cho componentWillReceiveProps...
    // Tương tác với DOM: Bạn có thể thực hiện các thao tác trên DOM sau khi component đã cập nhật. 
    // Ví dụ, bạn có thể chèn hoặc xóa các phần tử DOM, điều chỉnh thuộc tính CSS, 
    // khởi chạy các thư viện bên ngoài, và nhiều hơn nữa.
    // - Xử lý logic dựa trên thay đổi của props hoặc state: 

    UNSAFE_componentWillReceiveProps (nextProps) {
      
        if(nextProps && nextProps.itemEditing) {

            this.setState({
                id: nextProps.itemEditing.id,
                name: nextProps.itemEditing.name,
                status: nextProps.itemEditing.status
            });
        } else {
            this.onClear();
        }
    }

    // đóng close Form trong button X
    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : 
        target.value;
        this.setState({
            [name]: value
        });
      
    }

    // Luu lai edit va close form
    onSave = (event) => {
        event.preventDefault();
        // this.props.onAddTask => redux
        this.props.onSaveTask(this.state);
        // Cancel and close form
        this.onClear();
        this.onCloseForm();


    }
    
    // clear input 
    onClear = () => {
    //   if(!this.state.id){
    //     // neu ko co data => ko xu ly gi ca
    //     // console.log(Object.keys(this.props.itemEditing).length === 0); // co the dung phuong phap nay cho if(!this.state.id)
    //     } else {
            this.setState({
                // id: '', hoac bo = vi la clear trong form nen ko can phai dung id
                name: '',
                status: false
            });
        
    }
    

    //=============================//
    render() {
        // Change title when edit or not edit
        // nếu trạng thái state isDisplay bây giờ là false thì ko hiện form cập nhập 
        if(!this.props.isDisplayForm) return null;
        return (
            <div className="card">
                <div className="card-header text-bg-primary">
                <h5 className="card-title d-flex align-items-center justify-content-between">
                    {this.state.id ?'Cập nhập công việc':'Thêm công việc'}
                    <span
                        className='fa fa-times-circle' style={{cursor:'pointer'}}
                        onClick={this.onCloseForm}
                    ></span>
                </h5>
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSave}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input 
                                type='text'
                                className='form-control'
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <label>Trạng thái :</label>
                        <select 
                            className="form-select" 
                            required="required"
                            name="status"
                            value={this.state.status}
                            onChange={this.onChange}
                            >
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Thêm</button> &nbsp;
                            <button 
                                type="button" 
                                className="btn btn-danger"
                                onClick={this.onClear}
                                >Hủy bỏ</button>
                        </div>
                    </form>

                </div>
                {/* end card-body */}
            </div>
        );
    }
}
// React-Redux
// phai import {connect} from ...
// Quan lý state 
const mapStateToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm,
        itemEditing: state.itemEditing
    }
};
// một hàm giúp kết nối các hành động (actions) với các props của component
const mapDispatchToProps = (dispatch,props) => {
    return {
        onSaveTask : (task) => {
            // actions is on name of import 
            dispatch(actions.saveTask(task));
         },
         onCloseForm: () => {
            dispatch(actions.closeForm());
        }
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);
