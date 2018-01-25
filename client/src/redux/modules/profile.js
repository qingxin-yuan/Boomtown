// ACTIONS (TYPES)

const GET_PROFILE_LOADING = 'GET_PROFILE_LOADING';
const GET_PROFILE = 'GET_PROFILE';
const GET_PROFILE_ERROR = 'GET_PROFILE_ERROR';

// ACTION CREATORS - FUNCTIONS THAT RETURN OBJECT
const getItemsLoading = () => ({
    type: GET_PROFILE_LOADING
});

const getItems = items => ({
    type: GET_PROFILE,
    payload: items
});

const getItemsError = error => ({
    type: GET_PROFILE_ERROR,
    payload: error
});

// ASYNC ACTION CREATOR
export const fetchItemsAndUser = userid => dispatch => {
    dispatch(getItemsLoading()); // set loading icon before fetching the data

    return Promise.all(
        [
            `http://localhost:4000/items/?itemowner=${userid}`,
            'http://localhost:4000/users',
            `http://localhost:4000/items/?borrower=${userid}`
        ].map(url => fetch(url).then(response => response.json()))
    )

        .then(json => {
            const [itemsList, userList, itemsBorrowed] = json;

            console.log(itemsList, userList, itemsBorrowed);

            itemsList.map(item => {
                item.itemowner = userList
                    .slice()
                    .find(user => user.id === item.itemowner);
                item.itemowner.borrowed = itemsBorrowed;
                item.borrower
                    ? (item.borrowerName = userList
                        .slice()
                        .find(user => user.id === item.borrower).fullname)
                    : (item.borrowerName = null);
            });

            dispatch(getItems(itemsList));
        })

        .catch(error => dispatch(getItemsError(error.message)));
};

// REDUCER
export default (
    state = {
        // initial state
        isLoading: false,
        items: [],

        error: ''
    },
    action
) => {
    switch (action.type) {
    case GET_PROFILE_LOADING: {
        return {
            ...state,
            isLoading: true,
            error: '' // if previously there was an error, clear the error
        };
    }

    case GET_PROFILE: {
        return {
            ...state,
            items: action.payload,
            isLoading: false,
            error: ''
        };
    }

    case GET_PROFILE_ERROR: {
        return {
            ...state,
            isLoading: false,
            error: action.payload
        };
    }

    default:
        return state;
    }
};
