import * as Types from './../../constants/ActionTypes';

const defaultState = {
    id: '',
    name: '',
    status: false
};

const myReducer = (state = defaultState, action) => {
    switch(action.type) {
        case Types.GET_WORK_EDITTING:
            return action.work;
        case Types.RESET_FORM: 
            return defaultState;
        default: return {...state};
    };
}

export default myReducer;