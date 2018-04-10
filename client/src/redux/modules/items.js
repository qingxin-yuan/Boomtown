// ACTIONS (TYPES)

// const GET_ITEMS_LOADING = 'GET_ITEMS_LOADING';
// const GET_ITEMS = 'GET_ITEMS';
// const GET_ITEMS_ERROR = 'GET_ITEMS_ERROR';
const GET_FILTER_TAGS = 'GET_FILTER_TAGS';
const GET_TAG_LIST = 'GET_TAG_LIST';
const RESET_TAGS = 'RESET_TAGS';

// ACTION CREATORS - FUNCTIONS THAT RETURN OBJECT
// const getItemsLoading = () => ({
//     type: GET_ITEMS_LOADING
// });

// const getItems = items => ({
//     type: GET_ITEMS,
//     payload: items
// });

// const getItemsError = error => ({
//     type: GET_ITEMS_ERROR,
//     payload: error
// });

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
    state = {
        // initial state
        // isLoading: false,
        items: [],
        tags: [],
        tagList: []
        // error: ''
    },
    action
) => {
    switch (action.type) {
    case GET_FILTER_TAGS: {
        return {
            ...state,
            tags: action.payload
            // items: action.payload.items,
            // filteredItems,
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
    // case GET_ITEMS_LOADING: {
    //     return {
    //         ...state,
    //         isLoading: true,
    //         error: '' // if previously there was an error, clear the error
    //     };
    // }

    // case GET_ITEMS: {
    //     return {
    //         ...state,
    //         items: action.payload,
    //         // filteredItems: action.payload,
    //         isLoading: false,
    //         error: ''
    //     };
    // }

    // case GET_ITEMS_ERROR: {
    //     return {
    //         ...state,
    //         isLoading: false,
    //         error: action.payload
    //     };
    // }

    default:
        return state;
    }
};
