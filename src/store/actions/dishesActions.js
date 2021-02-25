import axiosDishes from "../../axios-dishes";

export const FETCH_DISHES_REQUEST = 'FETCH_DISHES_REQUEST';
export const FETCH_DISHES_SUCCESS = 'FETCH_DISHES_SUCCESS';
export const FETCH_DISHES_FAILURE = 'FETCH_DISHES_FAILURE';

export const fetchDishesRequest = () => ({type: FETCH_DISHES_REQUEST});
export const fetchDishesSuccess = (data) => ({type: FETCH_DISHES_SUCCESS, data});
export const fetchDishesFailure = (error) => ({type: FETCH_DISHES_FAILURE, error});

export const fetchDishes = () => {
	return async dispatch => {
		try {
			dispatch(fetchDishesRequest());
			const responseDishes = await axiosDishes.get('/menu.json');
			dispatch(fetchDishesSuccess(responseDishes.data));
		} catch (e) {
			dispatch(fetchDishesFailure(e));
		}
	}
}