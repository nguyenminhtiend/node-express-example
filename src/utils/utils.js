const isAuthenticated = () => {
    if (getAccessToken())
        return true;
    else return false;
}

const getAccessToken = () => {
    //window.localStorage.removeItem('authToken');
    var authToken = window.localStorage.getItem('scb-authToken');
    if (authToken) {
        return authToken;
    }
    return null;
}

const utils = {
    isAuthenticated,
    getAccessToken
};

export default utils;
