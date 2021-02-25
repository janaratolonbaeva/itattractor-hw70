import {FETCH_DISHES_FAILURE, FETCH_DISHES_REQUEST, FETCH_DISHES_SUCCESS} from "../actions/dishesActions";

const initialState = {
 dishLoading: false,
 dishes: {},
 error: null
}


const dishesReducer = (state = initialState, action) => {
 switch (action.type) {
  case FETCH_DISHES_REQUEST:
   return {...state, dishLoading: true}
  case FETCH_DISHES_SUCCESS:
   return {...state, dishLoading: false, dishes: action.data}
  case FETCH_DISHES_FAILURE:
   return {...state, dishLoading: false, dishes: action.error}
  default:
   return state
 }
};

export default dishesReducer;