// Xu ly cac su kien update,Output.delete,edit... va thực thi
import * as types from "./../constants/ActionTypes";

// create ID // function
var s4 = () => {
// 0x10000 là số trong hệ 16. Tính ra sẽ có giá trị là 16^4 = 65536
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
}
var randomID =() => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-'+ s4() + '-'+ s4() + s4() + s4();
}


// change status/ delete by id
var findIndex = (tasks, id) => {
    var result = -1;
        tasks.forEach((task,index) => {
            if(task.id === id) {
                result = index;
            }
        });
        return result;
    }


// lay data tu cookie o browser
var data = JSON.parse(localStorage.getItem('tasks'));
// because there a Task[] in App.js| gan data vao initialState
var initialState = data ? data: [];  

// Xu ly tra ve data or state | action = task
var myReducer = ( state = initialState, action ) => {
    var id = '';
    var index = -1;
    // neu nhan duoc action (su kien hang dong) nao do
    switch(action.type) {
        case types.LIST_ALL: // Prints list
            return state;   
        case types.SAVE_TASK: 
        
            var task = {
                id : action.task.id, // co value
                name: action.task.name,
                // truong typeof la boolean hay vi st
                status: (action.task.status ==='true'||action.task.status === true) ? true : false
            };
            // neu chua co id thi tao ID (ADD TASK)
            if(!task.id) {
                // Add task
                task.id = randomID(); 
                state.push(task);
            } else {
                // Edit task
                index = findIndex(state,task.id);
                state[index] = task;
            }
            localStorage.setItem('tasks',JSON.stringify(state));
            // [...state] : tao mot clone array cua state
            return [...state];

        case types.UPDATE_STATUS_TASK: 
             // change status of a task / when clicked
            id = action.id;
            index = findIndex(state,id);
            /* Option 1:*/     
            // var cloneTask = {...state[index]}; // tao clone task
            // cloneTask.status = !cloneTask.status; // change status of a task
            // // Gan cloneTask vao state[index] can cap nhap trang thau
            // state[index] = cloneTask;

            /* Option 2:*/     
            state[index] = {
                ...state[index], // clone task[index]
                status: !state[index].status // change status of a task o index
            };
            // Luu lai trong cookie on browser
            localStorage.setItem('tasks',JSON.stringify(state));
             
            return [...state];
        
        case types.DELETE_TASK: 
            // delete a task
            id = action.id;;
            index = findIndex(state, id);
            // xoa a task 
            state.splice(index,1);
            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state];

        default: return state;
    }

};

export default myReducer;
