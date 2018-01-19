//ACTIONS (TYPES)

const GET_ITEMS_LOADING = 'GET_ITEMS_LOADING';
const GET_ITEMS = 'GET_ITEMS';
const GET_ITEMS_ERROR = 'GET_ITEMS_ERROR';


//ACTION CREATORS - FUNCTIONS THAT RETURN OBJECT
const getItemsLoading = () =>({
  type: GET_ITEMS_LOADING,
})

const getItems = (items) => ({
  type: GET_ITEMS,
  payload: items,
})

const getItemsError = (error) => ({
  type: GET_ITEMS_ERROR,
  payload: error,
})

//ASYNC ACTION CREATOR
export const fetchItemsAndUser = () => (dispatch) =>{

  dispatch(getItemsLoading());  //set loading icon before fetching the data

  return Promise.all(
    ['http://localhost:4000/items', 'http://localhost:4000/users'].map(url=>
  fetch(url).then(response=>response.json()),
    ),
  )

  .then(json=>{
    const [itemsList, userList] = json;

    console.log(itemsList, userList);

    itemsList.map(item => {

      item.itemowner = userList.slice().find(
        user=>user.id===item.itemowner
      )});

    dispatch(getItems(itemsList));
  })
  .catch(error => dispatch(getItemsError(error.message)));


};



//REDUCER
export default (
  state ={    //initial state
    isLoading: false,
    items: [],
    
    error: '',
  }, 
  action
) => {
  switch(action.type){

    case GET_ITEMS_LOADING: {
      return {
        ...state,
        isLoading: true,
        error: '',    // if previously there was an error, clear the error
      }
    }

    case GET_ITEMS: {
      return {
        ...state,
        items: action.payload,
        isLoading: false,
        error: '',
      }
    }

    case GET_ITEMS_ERROR: {
      return{
        ...state,
        isLoading: false,
        error: action.payload,
      }
    }

    default:
      return state;
  }
}