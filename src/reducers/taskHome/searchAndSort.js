import * as Types from './../../constants/ActionTypes';

const defaultState = {
    keyword: '',
    sort: {
        by: '',
        value: 0
    }
}

const myReducer = (state = defaultState, actions) => {
    switch (actions.type) {
        case Types.SEARCH:
            return { ...state, keyword: actions.keyword };
        case Types.SORT:
            return { ...state, sort: actions.value };
        default: return { ...state, sort: { ...state.sort } };
    }
}

export default myReducer;