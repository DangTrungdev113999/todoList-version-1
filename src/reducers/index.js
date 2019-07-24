import { combineReducers } from 'redux';
import works from './taskHome/works';
import isDisplayForm from './taskHome/isDisplayForm';
import workEditting from './taskHome/workEditting';
import filterWork from './taskHome/filterWork';
import searchAndSort from './taskHome/searchAndSort';

const appReducer = combineReducers({
    works,
    isDisplayForm,
    workEditting,
    filterWork,
    searchAndSort
});

export default appReducer;
