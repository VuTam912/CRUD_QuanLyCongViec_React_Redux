// Xu ly cac su kien update,Output.delete,edit... va tra ve roi su ly
// Chu y khi ban tao file nay thi ban import file qua index.js trong recuder
import * as types from "./../constants/ActionTypes";

var initialState = {
    name: '',
    status:  -1
};

// Xu ly tra ve data or state | action = task 
var myReducer = ( state = initialState, action ) => {
    // neu nhan duoc action (su kien hang dong) nao do
    switch(action.type) {
        case types.FILTER_TABLE: 
            return {
                name: action.filter.name,
                status: parseInt(action.filter.status,10)
            };
        default: return state;
    }

};

export default myReducer;
