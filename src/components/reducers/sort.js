// Xu ly cac su kien update,Output.delete,edit... va tra ve roi su ly
// Chu y khi ban tao file nay thi ban import file qua index.js trong recuder
import * as types from "../constants/ActionTypes";

var initialState = {
    by: 'name',
    value:  1 // 1: tang , -1: giam
};

// Xu ly tra ve data or state | action = task 
var myReducer = ( state = initialState, action ) => {
    // neu nhan duoc action (su kien hang dong) nao do
    switch(action.type) {
        case types.SORT: 
            return {
                by: action.sort.by, // sort theo kieu ...
                value: action.sort.value // tra ve value dua theo sort
            };
        default: return state;
    }

};

export default myReducer;
