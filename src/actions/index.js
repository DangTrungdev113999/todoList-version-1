import * as Types from './../constants/ActionTypes';
import axios from 'axios';

export const actOpenForm = () => {
    return {
        type: Types.OPEN_FROM
    }
}

export const actCloseForm = () => {
    return {
        type: Types.CLOSE_FROM
    }
}

export const actRenderWorksReques = () => {
    return dispatch => {
        return axios({
            method: 'GET',
            url: 'https://5d35c5105b83cd0014d0b359.mockapi.io/api/v1/works',
            data: null
        }).then(res => {
            dispatch(actRenderWorks(res.data));
        })
    }
}

export const actRenderWorks = works => {
    return {
        type: Types.RENDER_WORKS,
        works
    }
}