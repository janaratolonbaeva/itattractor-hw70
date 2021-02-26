import {ADD_DISH, INIT_CART, ORDER_FAILURE, ORDER_REQUEST, ORDER_SUCCESS, REMOVE_DISH} from "../actions/cartActions";

const initialState = {
	cart: [],
	orderLoading: false,
	fetchError: false,
}

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case INIT_CART:
			return {...initialState}
		case ADD_DISH:
			const arrayCopy = [...state.cart];
			const result = arrayCopy.find(x => x.title === action.dish.title);
			if (result) {
				result.count += 1;
				return {...state, cart: arrayCopy};
			}
			action.dish.count = 1;

			return {
				...state,
				cart: state.cart.concat(action.dish)
			}
		case REMOVE_DISH:
			const cartCopy = [...state.cart];
			const item = cartCopy.find(x => x.title === action.title);
			const index = cartCopy.indexOf(item);
			cartCopy.splice(index, 1);

			return {
				...state,
				cart: cartCopy
			}
		case ORDER_REQUEST:
			return {...state, orderLoading: true};
		case ORDER_SUCCESS:
			return {...state, orderLoading: false, ordered: true};
		case ORDER_FAILURE:
			return {...state, orderLoading: false, error: action.error};
		default:
			return state;
	}
}

export default cartReducer;