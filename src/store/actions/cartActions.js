import axiosDishes from "../../axios-dishes";

export const ADD_DISH = 'ADD_DISH';
export const REMOVE_DISH = 'REMOVE_DISH';
export const ORDER_REQUEST = 'ORDER_REQUEST';
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_FAILURE = 'ORDER_FAILURE';
export const INIT_CART = 'INIT_CART';

export const addDish = (dish) => ({type: ADD_DISH, dish});
export const removeDish = (title) => ({type: REMOVE_DISH, title});
export const orderRequest = () => ({type: ORDER_REQUEST});
export const orderSuccess = () => ({type: ORDER_SUCCESS});
export const orderFailure = order => ({type: ORDER_FAILURE, order});
export const initOrder = () => ({type: INIT_CART});

export const createOrder = order => {
	return async dispatch => {
		try {
			dispatch(orderRequest());
			await axiosDishes.post('/orders.json', order);
			dispatch(orderSuccess());
		} catch (e) {
			dispatch(orderFailure(e));
		}
	}
}