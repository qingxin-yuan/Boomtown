// Action types
const GET_SHARE_TITLE = 'GET_SHARE_TITLE';
const GET_SHARE_DESCRIPTION = 'GET_SHARE_DESCRIPTION';
const GET_SHARE_ERROR = 'GET_SHARE_ERROR';

// Action creators
export const getShareTitle = title => ({
    type: GET_SHARE_TITLE,
    payload: title
});

export const getShareDescription = description => ({
    type: GET_SHARE_DESCRIPTION,
    payload: description
});
export const getShareError = error => ({
    type: GET_SHARE_ERROR,
    payload: error
});

// Reducer
export default (
    state = {
        title: '',
        description: '',
        error: ''
    },
    action
) => {
    switch (action.type) {
    case GET_SHARE_TITLE:
        return {
            ...state,
            title: action.payload,
            error: ''
        };

    case GET_SHARE_DESCRIPTION:
        return {
            ...state,
            description: action.payload,
            error: ''
        };

    case GET_SHARE_ERROR:
        return {
            ...state,
            error: action.payload
        };
    default:
        return state;
    }
};
