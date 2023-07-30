import React, {Component} from 'react';
import TaskItem from './TaskItem';
// Để connect tới redux
import { connect } from 'react-redux';
import * as actions from './../components/actions/index';

class TaskList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1 // all: -1, active: 1, deactive: 0
        }
    }

    // Nếu bạn nhập input (nhập từ khóa)
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;

        var filter = {
            name: name === 'filterName' ? value : this.state.filterName,
            status: name === 'filterStatus' ? value : this.state.filterStatus 
        };

        this.props.onFilterTable(filter);
        this.setState({
            [name]: value
        });
    }

    render() {

        // mapStateToProps (tasks)
        var { tasks, filterTable, keyword,sort } = this.props;  // props.state in mapStateToProps

        // filter on Table
        if(filterTable.name) {
            tasks = tasks.filter((task) => {
                        // IndexOf tra ve chi index khi tim thay (-1 la ko tim thay)
                        return task.name.toLowerCase().indexOf(filterTable.name) !== -1;
                    });
        }


        tasks = tasks.filter((task) => {
            if(filterTable.status === -1) {
                return task;
                } else {
                        
                    return task.status === (filterTable.status === 1 ? true : false); 
                }
        });

        //search 

        tasks = tasks.filter((task) => {
                    return task.name.toLowerCase().indexOf(this.props.keyword.toLowerCase()) !== -1;
                });

        // Xu ly sap xep
        if(sort.by === 'name') {
            tasks.sort((a,b) => {
                if(a.name > b.name ) return sort.value // 1 tang dan
                else if(a.name < b.name) return sort.value; // -1 giam dan
                else return 0;
            });
        } else {
            tasks.sort((a,b) => {
                if(a.status > b.status ) return sort.value // 1 tang dan
                else if(a.status < b.status) return sort.value; // -1 giam dan
                else return 0;
            });
        }

        
    
        // note: always has a key
        var elmTasks = tasks.map((task,index) => {
            // props in TaskItem
            return <TaskItem 
                        key={task.id} 
                        index={index + 1} 
                        task={task}
                       />
        });

        return (   
            <div className="row mt-3">
                <div className="col-xl-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Tên</th>
                            <th className="text-center">Trạng Thái</th>
                            <th className="text-center">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input 
                                    type='text' 
                                    className='form-control' 
                                    name="filterName"
                                    value={ this.state.filterName }
                                    onChange={ this.onChange }
                                />
                            </td>
                            <td>
                                <select 
                                    className="form-control"
                                    name="filterStatus"
                                    value={ this.state.filterStatus }
                                    onChange={ this.onChange }
                                    >
                                    <option value={-1}>Tất Cả</option>
                                    <option value={0}>Ẩn</option>
                                    <option value={1}>Kích Hoạt</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>
                        {/* tr */}
                        {/* tasks | taskitem */} 

                        {elmTasks}
                   
                    </tbody>
                    </table>
                </div>

            </div>  
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        tasks: state.tasks,
        filterTable: state.filterTable,
        keyword: state.search,
        sort: state.sort
     }
};

// thuc hien cac action
const mapDispatchToProps = (dispatch,props) => {
    return {
        onFilterTable : (filter) => {   
            dispatch(actions.filterTask(filter));
        }
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(TaskList);