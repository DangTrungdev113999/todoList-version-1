import * as Types from './../../constants/ActionTypes';

const DefaultState = [];

const findIndex = (works, id) => {
    let result = -1;
    if(works.length > 0) {
        works.forEach((work,  index) => {
            if(work.id === id) {
                result =  index;
            };
        });
    }
    return result;
}

const myReducer = (state = DefaultState, action) => {
    let index = -1;
    switch(action.type) {
        case Types.RENDER_WORKS:
            return action.works;
        case Types.SAVE_WORK: 
            state.push(action.work);
            return [...state];
        case Types.DELETE_WORK:
            index = findIndex(state, action.id);
            if(index !== -1) {
                state.splice(index, 1);
            }
            return [...state];
        case Types.UPDATE_STATUS_WORK:
            index = findIndex(state, action.id);
            state[index] = { ...state[index], status: !state[index].status}
            return [...state]
        default: return [...state];
    };
};

export default myReducer;