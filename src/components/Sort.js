import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from './../components/actions/index';

class Sort extends Component {


    // UNSAFE_componentWillReceiveProps(nextProps) {
   
    // }

    onClick = (sortBy,  sortValue) => {
       
        this.props.onSort({
            by: sortBy,
            value: sortValue
        });
    }

    render() {
    
        return (
            <div className="col-xl-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu px-4">
                        <li onClick={ () => this.onClick('name',1) }>
                            <a 
                                role='button'
                                className={`dropdown-item ${(this.props.sort.by === 'name' && this.props.sort.value === 1) ? 'sort_selected' : ''}`}
                            >
                                <span className="fa fa-sort-alpha-asc"></span>
                                &nbsp; Tên A-Z
                            </a>
                        </li>
                        <li onClick={ () => this.onClick('name',-1) }>
                            <a 
                                className={`dropdown-item ${(this.props.sort.by === 'name' && this.props.sort.value === -1) ? 'sort_selected' : ''}`}
                                role='button'>
                            <span className="fa fa-sort-alpha-desc"></span>
                                &nbsp; Tên Z-A 
                            </a>
                        </li>
                        <hr className='mt-1 mb-2'/>
                        <li onClick={ () => this.onClick('status', 1) }>
                            <a 
                                role='button'
                                className={`dropdown-item ${(this.props.sort.by === 'status' && this.props.sort.value === 1) ? 'sort_selected' : ''}`}
                            >Trạng Thái Kích Hoạt</a>
                        </li>
                        <li onClick={ () => this.onClick('status', -1) }>
                            <a 
                                role='button'
                                className={`dropdown-item ${(this.props.sort.by === 'status' && this.props.sort.value === -1) ? 'sort_selected' : ''}`}
                                >Trạng Thái Ẩn</a>
                        </li>
                    </ul> 
                </div>
            </div>
        );
    }
}

// lay trang thai cua sort de su ly xem co can add css sort_selected hay ko 
const mapStateToProps = (state) => {
    return {
        sort: state.sort
    };
};

// thuc hien cac action
const mapDispatchToProps = (dispatch,props) => {
    return {
        onSort: (sort) => { // sort.by  sort.value
            dispatch(actions.sortTask(sort));
        }
    };
}



export default connect(mapStateToProps,mapDispatchToProps)(Sort);