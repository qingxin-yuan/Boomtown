// ACTIONS (TYPES)
const GET_FILTER_TAGS = 'GET_FILTER_TAGS';
const GET_TAG_LIST = 'GET_TAG_LIST';
const RESET_TAGS = 'RESET_TAGS';

// ACTION CREATORS - FUNCTIONS THAT RETURN OBJECT
export const getFilterTags = tags => ({
    type: GET_FILTER_TAGS,
    payload: tags
});
export const getTagList = tagList => ({
    type: GET_TAG_LIST,
    payload: tagList
});
export const resetTags = () => ({
    type: RESET_TAGS
});

// REDUCER
export default (
    // initial state
    state = {
        items: [],
        tags: [],
        tagList: []
    },
    action
) => {
    switch (action.type) {
    case GET_FILTER_TAGS: {
        return {
            ...state,
            tags: action.payload
        };
    }
    case GET_TAG_LIST: {
        return {
            ...state,
            tagList: action.payload
        };
    }
    case RESET_TAGS: {
        return {
            ...state,
            tags: []
        };
    }
    default:
        return state;
    }
};
