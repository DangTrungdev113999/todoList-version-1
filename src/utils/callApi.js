import axios from 'axios';
import { API_URL } from './../constants/config';

export default function callApi(method, endpoind, body) {
    return axios({
        method,
        url: `${API_URL}/${endpoind}`,
        data: body
    }).catch(err => {
        console.log(err);
    })
}