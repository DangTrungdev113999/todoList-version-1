import * as Types from './../../constants/ActionTypes';

const DefaultState = [];

const myReducer = (state = DefaultState, action) => {
    switch(action.type) {
        case Types.RENDER_WORKS:
            return action.works;
        case Types.SAVE_WORK: 
            state.push(action.work);
            return [...state];
        default: return [...state];
    };
};

export default myReducer;