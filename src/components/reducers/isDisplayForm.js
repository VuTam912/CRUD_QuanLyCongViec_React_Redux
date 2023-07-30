// Xu ly cac su kien update,Output.delete,edit... va tra ve roi su ly
import * as types from "./../constants/ActionTypes";

var initialState = false; // close form

// Xu ly tra ve data or state | action = task 
var myReducer = ( state = initialState, action ) => {
    // neu nhan duoc action (su kien hang dong) nao do
    switch(action.type) {
        case types.TOGGLE_FORM: 
            return !state; // !=> if true => false | false => true
        case types.OPEN_FORM:
            // state = true; // cap nhap trang thai state
            return true;
        case types.CLOSE_FORM:
            return false;

        default: return state;
    }

};

export default myReducer;
