import {LOGIN_SUCCESS, LOGIN_ERROR} from '../constants/actionTypes';
import axiosClient from '../utils/axiosClient';

export function handleLogin(loginData, successCallback) {
    return (dispatch) => {
        const url = 'auth/sign_in';
        dispatch(login(url, loginData, successCallback));
    }
}

const login = (url, loginData, successCallback) => {
    return dispatch => {
        axiosClient.post(url, JSON.stringify(loginData))
            .then(response => {
                if (response && response.data) {
                    if (successCallback)
                        successCallback.successFunction(successCallback.params);
                    window.localStorage.setItem('authToken', JSON.stringify(response.headers));
                    const data = {
                        isAuthenticated: true,
                        info: response.data.data
                    }
                    return dispatch({
                        type: LOGIN_SUCCESS,
                        data
                    });
                }
            })
            .catch(error => {
                return dispatch({
                    type: LOGIN_ERROR,
                    error
                });
            });
    }
}
