import * as Types from './../../constants/ActionTypes.js';

const defaultState = {
    filterName: '',
    filterStatus: -1
}

const myReducer = (state = defaultState, action) => {
    switch(action.type) {
        case Types.FILTER_WORK: 
            return action.value;
        default: return {...state};
    };
};

export default myReducer;