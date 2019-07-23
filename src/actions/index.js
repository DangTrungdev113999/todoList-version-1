import * as Types from './../constants/ActionTypes';
import callApi from './../utils/callApi';

export const actOpenForm = () => {
    return {
        type: Types.OPEN_FORM
    };
};

export const actCloseForm = () => {
    return {
        type: Types.CLOSE_FORM
    };
};

export const actRenderWorksReques = () => {
    return dispatch => {
        return callApi('GET', 'works', null).then(res => {
            dispatch(actRenderWorks(res.data));
        });
    };
};

export const actRenderWorks = works => {
    return {
        type: Types.RENDER_WORKS,
        works
    };
};

export const actSaveWorkRequest = work => {
    return dispatch => {
        return callApi('POST', 'works', work).then(res => {
            dispatch(actSaveWork(res.data));
        });
    };
};

export const actSaveWork = work => {
    return {
        type: Types.SAVE_WORK,
        work
    };
};