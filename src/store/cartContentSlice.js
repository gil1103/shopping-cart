import { createSlice } from '@reduxjs/toolkit';

const cartContentSlice = createSlice({
	name: 'cartContent',
	initialState: {
		items: [],
		totalQuantity: 0,
		changed: false
	},
	reducers: {
		replaceCart(state, action) {
			state.totalQuantity = action.payload.totalQuantity;
			state.items = action.payload.items;
		},
		addItemToCart(state, action) {
			const newItem = action.payload;
			const existingItem = state.items.find((item) => item.id === newItem.id);
			state.totalQuantity++;
			state.changed = true;
			if (!existingItem) {
				state.items.push({
					// allowed only with toolkit
					id: newItem.id,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price, // as quantity=1
					title: newItem.title
				});
				// return {...state, items: [...state.items, newItem]} // w/o toolkit
			} else {
				existingItem.quantity++;
				existingItem.totalPrice += newItem.price;
			}
		},
		removeItemFromCart(state, action) {
			if(state.totalQuantity===0) return
			const removedItemId = action.payload;
			const existingItem = state.items.find(
				(item) => item.id === removedItemId
			);
			state.totalQuantity--;
			state.changed = true;

			if (existingItem.quantity > 1) {
				existingItem.quantity--;
				existingItem.totalPrice -= existingItem.price;
			} else {
				state.items = state.items.filter((item) => item.id !== removedItemId);
			}
		}
	}
});

export const cartContentActions = cartContentSlice.actions;
export default cartContentSlice;
