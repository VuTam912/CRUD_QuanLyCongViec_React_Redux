// Xu ly cac su kien update,Output.delete,edit... va tra ve roi su ly
import * as types from "./../constants/ActionTypes";

var initialState = {
// neu bo sung khoi tao
    id: '',
    name: '',
    status: false

};

// Xu ly tra ve data or state | action = task 
var myReducer = ( state = initialState, action ) => {
    // neu nhan duoc action (su kien hang dong) nao do
    switch(action.type) {
        case types.EDIT_TASK: 
            
            return action.task; // !=> if true => false | false => true
        
        default: return state;
    }

};

export default myReducer;
