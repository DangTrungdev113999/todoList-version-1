import { combineReducers } from 'redux';
import works from './taskHome/works';
import isDisplayForm from './taskHome/isDisplayForm';

const appReducer = combineReducers({
    works,
    isDisplayForm
});

export default appReducer;
