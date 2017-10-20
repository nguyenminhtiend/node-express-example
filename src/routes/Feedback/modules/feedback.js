import axiosClient from '../../../utils/axiosClient';
export const UPDATE_FEEDBACKS_LIST = 'UPDATE_FEEDBACKS_LIST';

export function getFeedbacks() {
    return (dispatch) => {
        axiosClient.get(`/cms/feedback?meeting_id=1`).then(response => {
            return dispatch({
                type: UPDATE_FEEDBACKS_LIST,
                data: response.data
            })
        })
    }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const actionsMap = {
    [UPDATE_FEEDBACKS_LIST]: (state, action) => {
        return {
            ...state,
            feedbacks: action.data
        }
    }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    feedbacks: []
};

export default function feedbackReducer(state = initialState, action) {
    const handler = actionsMap[action.type];
    return handler ? handler(state, action) : state;
}
