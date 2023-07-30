import { combineReducers } from 'redux';
import tasks from './task';
import isDisplayForm from './isDisplayForm';
import itemEditing from './itemEditing';
import filterTable from './filterTable';
import search from './search';
import sort from './sort';


// Reducer để lưu trữ trạng thái (state) và các component sẽ được sử dụng nhiều lần 
// để thao tác sử lý sự kiện với dữ liệu nếu các component được connect với reducer này.

/* Mỗi khi Redux store thay đổi trạng thái của nó, các component được kết nối với store
 thông qua mapStateToProps sẽ tự động nhận được các giá trị mới từ store và cập nhật lại giao diện của chúng.*/

const myReducer = combineReducers({
    tasks,        // tasks: tasks
    isDisplayForm, // isDisplayedForm: isDisplayForm
    itemEditing,
    filterTable,
    search,
    sort
});

// export default = cho phep ta dặt tên bất ký khi import nó từ myRucder
// nếu ko ghi default thì phải đặt tên đúng nguyên giống tên trong import này
export default myReducer;