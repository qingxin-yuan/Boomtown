const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
const TOGGLE_USER_LOADING = 'TOGGLE_USER_LOADING';
const TOGGLE_AUTH_STATE = 'TOGGLE_AUTH_STATE';
const LOG_OUT = 'LOG_OUT';

const updateUserInfo = userInfo => ({
    type: UPDATE_USER_INFO,
    payload: userInfo
});

const toggleAuthState = authenticated => ({
    type: TOGGLE_AUTH_STATE,
    payload: authenticated
});

export const userLoading = isLoading => ({
    type: TOGGLE_USER_LOADING,
    payload: isLoading
});

export const updateAuth = authState => dispatch => {
    dispatch(userLoading(false));
    if (authState !== false) {
        dispatch(updateUserInfo(authState));
    } else {
        dispatch(toggleAuthState(false));
    }
};

export default function (
    state = {
        authenticated: false,
        userLoading: true,
        userInfo: {}
    },
    action
) {
    switch (action.type) {
    case UPDATE_USER_INFO:
        return { ...state, authenticated: true, userInfo: action.payload };
    case TOGGLE_AUTH_STATE:
        return { ...state, authenticated: false, userInfo: {} };
    case TOGGLE_USER_LOADING:
        return {
            ...state,
            userLoading: action.payload
        };
    case LOG_OUT:
        return { authenticated: false };
    default:
        return state;
    }
}
