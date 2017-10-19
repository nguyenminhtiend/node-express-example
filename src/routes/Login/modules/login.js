export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

import axiosClient from '../../../utils/axiosClient';

export function handleLogin(loginData, successCallback) {
    return (dispatch) => {
        const url = 'admin/token';
        dispatch(login(url, loginData, successCallback));
    }
}

const login = (url, loginData, successCallback) => {
    return dispatch => {
        axiosClient.post(url, JSON.stringify(loginData))
            .then(response => {
                if (response && response.data) {
                    if (successCallback) {
                        successCallback();
                    }
                    let token = response.data.token;
                    window.localStorage.setItem('scb-authToken', token);
                    return dispatch({
                        type: LOGIN_SUCCESS,
                        token
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


// ------------------------------------
// Action Handlers
// ------------------------------------
const actionsMap = {
    [LOGIN_SUCCESS]: (state, action) => {
        return {
            ...state,
            isAuthenticated: true,
            token: action.token,
            errorMessage: ''
        };
    },
    [LOGIN_ERROR]: (state, action) => {
        return {
            ...state,
            errorMessage: action.error? action.error.response.data : 'Something went wrong'
        };
    },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    isAuthenticated: false,
    token: null,
    errorMessage: ''
};

export default function counterReducer(state = initialState, action) {
    const handler = actionsMap[action.type]

    return handler ? handler(state, action) : state
}
