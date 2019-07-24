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
        if (work.id) {
            return callApi('PUT', `works/${work.id}`, work).then(res => {
                dispatch(actSaveWork(res.data));
            })
        }

        return callApi('POST', 'works', work).then(res => {
            dispatch(actSaveWork(work));
        });
    };
};

export const actSaveWork = work => {
    return {
        type: Types.SAVE_WORK,
        work
    };
};

export const actDeleteWorkRequest = id => {
    return dispatch => {
        return callApi('DELETE', `works/${id}`, null).then(res => {
            dispatch(actDeleteWork(id));
        })
    }
}

export const actDeleteWork = id => {
    return {
        type: Types.DELETE_WORK,
        id
    }
}

export const actUpdateWorkStatusRequest = work => {
    return dispatch => {
        return callApi('PUT', `works/${work.id}`, {
            id: work.id,
            name: work.name,
            status: !work.status
        }).then(res => {
            dispatch(actUpdateWorkStatus(work.id));
        })
    }
}

export const actUpdateWorkStatus = id => {
    return {
        type: Types.UPDATE_STATUS_WORK,
        id
    }
}

export const actGetWorkEditting = work => {
    return {
        type: Types.GET_WORK_EDITTING,
        work
    }
}

export const actFilterWork = value => {
    return {
        type: Types.FILTER_WORK,
        value
    }
}

export const actResetForm = () => {
    return {
        type: Types.RESET_FORM
    }
}

export const actSearchWord = keyword => {
    return {
        type: Types.SEARCH,
        keyword
    }
}

export const actSortWord = value => {
    return {
        type: Types.SORT,
        value
    }
}