import React, {Component} from 'react';
// Để connect tới redux
import { connect } from 'react-redux';
import * as actions from './actions/index';

class TaskItem extends Component {

    showStatusElement() {
        return (
            <span style={{cursor:'pointer'}} className={this.props.task.status === true ?'badge bg-danger':'badge bg-success '}
            onClick={ this.onUpdateStatus }
            >  
            {this.props.task.status === true ? 'Kích hoạt': 'Ẩn'}
        </span>
        );
    }


    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
        // dispatch(actions.onUpdateStatus(id));
    }

    onDelete = () => {
        this.props.onDeleteTask(this.props.task.id);
        // dispatch(actions.deleteTask(id));
        this.props.onCloseForm();
    }

    onEditTask = () => {
        // thuc hien mo form khi cap nhap
        this.props.onOpenForm();
        this.props.onEditTask(this.props.task);
      
    }


    render() {

        // var { task,index } = this.props;

        return (
            <tr>
                <td>{this.props.index}</td>
                <td>{this.props.task.name}</td>
                <td className='text-center'>
                    { this.showStatusElement() }       
                </td>
                <td className='text-center'>
                    <button 
                        type="button" 
                        className="btn btn-warning"
                        onClick={ this.onEditTask }
                        >
                        <span className="fa fa-pencil me-1"></span>Sửa
                    </button>
                    &nbsp;
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={ this.onDelete }
                        >
                        <span className="fa fa-trash me-1"></span>Xóa
                    </button>
                </td>
            </tr>
        );
    }
}


const mapStateToProps = (state) => {
    return {};
};

// thuc hien cac action
const mapDispatchToProps = (dispatch,props) => {
    return {
        onUpdateStatus : (id) => {
            dispatch(actions.updateStatus(id));
        },
        onDeleteTask : (id) => {
            dispatch(actions.deleteTask(id));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        },
        // Thuc hien Mo form khi sua
        onOpenForm : () => {
            dispatch(actions.openForm());
        },
        onEditTask : (task) => {
            dispatch(actions.editTask(task));
        }
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(TaskItem);