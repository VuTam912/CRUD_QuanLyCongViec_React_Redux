// Xu ly cac su kien update,Output.delete,edit... va tra ve roi su ly
// Chu y khi ban tao file nay thi ban import file qua index.js trong recuder
import * as types from "../constants/ActionTypes";

var initialState = '';

// Xu ly tra ve data or state | action = task 
var myReducer = ( state = initialState, action ) => {
    // neu nhan duoc action (su kien hang dong) nao do
    // tra ve tu khoa keyword
    switch(action.type) {
        case types.SEARCH: 
            return action.keyword;
        default: return state;
    }

};

export default myReducer;
