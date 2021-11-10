import { cartUiActions } from '../cartUiSlice';
import { cartContentActions } from './../cartContentSlice';

export const fetchCardData = () => {
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await fetch(
				'https://shopping-cart-8d0b2-default-rtdb.firebaseio.com/cart.json'
			);
			if (!response.ok) {
				throw new Error('fetching cart data failed');
			}
			const data = await response.json();
			return data;
		};

		try {
			const cartData = await fetchData();
			dispatch(
				cartContentActions.replaceCart({
					items: cartData.items || [],
					totalQuantity: cartData.totalQuantity
				})
			);
		} catch (error) {
			dispatch(
				cartUiActions.showNotification({
					status: 'error',
					title: 'Error',
					message: 'fetching cart data failed'
				})
			);
		}
	};
};

export const sendCardData = (cartData) => {
	return async (dispatch) => {
		dispatch(
			cartUiActions.showNotification({
				status: 'pending',
				title: 'Sending...',
				message: 'Sending Cart data'
			})
		);

		const sendRequest = async () => {
			const response = await fetch(
				'https://shopping-cart-8d0b2-default-rtdb.firebaseio.com/cart.json',
				{
					method: 'PUT', // put req replace the existing data
					body: JSON.stringify({
						// w/p 'changed' property
						items: cartData.items,
						totalQuantity: cartData.totalQuantity
					})
					// body: JSON.stringify(cartData) // sending all the object as is
				}
			);

			if (!response.ok) {
				throw new Error('sending cart data failed');
			}
		};

		try {
			await sendRequest();
			dispatch(
				cartUiActions.showNotification({
					status: 'success',
					title: 'Success',
					message: 'Sent cart data successfully!'
				})
			);
		} catch (error) {
			dispatch(
				cartUiActions.showNotification({
					status: 'error',
					title: 'Error',
					message: 'sending cart data failed'
				})
			);
		}
	};
};
