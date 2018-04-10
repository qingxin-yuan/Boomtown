// Action types
const GET_SHARE_TITLE = 'GET_SHARE_TITLE';
const GET_SHARE_DESCRIPTION = 'GET_SHARE_DESCRIPTION';

// Action creators
export const getShareTitle = title => ({
    type: GET_SHARE_TITLE,
    payload: title
});

export const getShareDescription = description => ({
    type: GET_SHARE_DESCRIPTION,
    payload: description
});

// Reducer
export default (
    state = {
        title: '',
        description: ''
    },
    action
) => {
    switch (action.type) {
    case GET_SHARE_TITLE: {
        return {
            ...state,
            title: action.payload
        };
    }

    case GET_SHARE_DESCRIPTION: {
        return {
            ...state,
            description: action.payload
        };
    }
    default:
        return state;
    }
};
