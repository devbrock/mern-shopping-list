import { createStore, compose, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

const initialState = {
	items: [],
	loading: false,
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	reducer,
	initialState,
	composeEnhancer(applyMiddleware(thunk))
);

function reducer(state, action) {
	switch (action.type) {
		case 'GET_ITEMS':
			return {
				...state,
				items: action.payload,
				loading: false,
			};
		case 'ADD_ITEM':
			return {
				...state,
				items: [action.payload, ...state.items],
			};
		case 'DELETE_ITEM':
			return {
				...state,
				items: state.items.filter(item => item._id !== action.payload),
			};
		case 'ITEMS_LOADING':
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
}

export const getItemsAction = () => dispatch => {
	dispatch(setItemsLoading(true));
	axios.get('/api/items').then(res =>
		dispatch({
			type: 'GET_ITEMS',
			payload: res.data,
		})
	);
};

export const addItemAction = item => dispatch => {
	axios.post('/api/items', item).then(res =>
		dispatch({
			type: 'ADD_ITEM',
			payload: res.data,
		})
	);
};

export const deleteItemAction = id => dispatch => {
	axios.delete(`/api/items/${id}`).then(res =>
		dispatch({
			type: 'DELETE_ITEM',
			payload: id,
		})
	);
};

export const setItemsLoading = () => ({
	type: 'ITEMS_LOADING',
});
