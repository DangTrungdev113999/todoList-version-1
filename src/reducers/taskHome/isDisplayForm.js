import * as Types from './../../constants/ActionTypes';

const defaultState = false;

const myReducer = (state = defaultState, action) => {
    switch(action.type) {
        case Types.OPEN_FROM: 
            return true;
        case Types.CLOSE_FROM:
            return false;
        default: return state;
    }
}


export default myReducer;