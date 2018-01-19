//ACTION (TYPES)

const GET_PROFILE_ITEMS = 'GET_PROFILE_ITEMS';

//ACTION CREATOR

const getProfileItems = (items) =>({
  type: GET_PROFILE_ITEMS,
  payload: items,
});

//REDUCER
export default (
  state = {
    items: []
  }, action
) => {
  switch ( action.type) {
    case GET_PROFILE_ITEMS: {

      return{
      ...state,
      items: action.payload,
      }
    }
    default: 
    return state;
  }
}