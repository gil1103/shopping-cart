import { createSlice } from '@reduxjs/toolkit';

const initialCartState = { 
	isCartShown: true, 
	notification: null 
};

const cartUiSlice = createSlice({
	name: 'cart',
	initialState: initialCartState,
	reducers: {
		toggleCart(state) {
			state.isCartShown = !state.isCartShown;
		},
		showNotification(state, action) {
			state.notification = {
				status: action.payload.status,
				title: action.payload.title,
				message: action.payload.message
			};
		}
	}
});

export const cartUiActions = cartUiSlice.actions;

export default cartUiSlice;
