import * as Types from './../../constants/ActionTypes';

const defaultState = false;

const myReducer = (state = defaultState, action) => {
    switch(action.type) {
        case Types.OPEN_FORM: 
            return true;
        case Types.CLOSE_FORM:
            return false;
        default: return state;
    }
}


export default myReducer;