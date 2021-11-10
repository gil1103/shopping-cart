import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react';
import Notification from './components/UI/Notification';
import { sendCardData } from './store/actions/cartActions';
import { fetchCardData } from './store/actions/cartActions';

let isInitial = true;

function App() {
	const showCart = useSelector((state) => state.cart.isCartShown);
	const cartData = useSelector((state) => state.content);
	const notification = useSelector((state) => state.cart.notification);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCardData());
	}, [dispatch]);

	useEffect(() => {
		if (isInitial) {
			isInitial = false;
			return;
		}
		if (cartData.changed) {
			dispatch(sendCardData(cartData));
		}
	}, [cartData, dispatch]);

	return (
		<Fragment>
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
			<Layout>
				{showCart && <Cart />}
				<Products />
			</Layout>
		</Fragment>
	);
}

export default App;

// if not using Thunk
// useEffect(() => {
// 	const sendCartData = async () => {
// 		dispatch(
// 			cartUiActions.showNotification({
// 				status: 'pending',
// 				title: 'Sending...',
// 				message: 'Sending Cart data'
// 			})
// 		);
// 		const response = await fetch(
// 			'https://food-order-app-7cec7-default-rtdb.firebaseio.com/cart.json',
// 			{
// 				method: 'PUT', // put req replace the existing data
// 				body: JSON.stringify(cart)
// 			}
// 		);

// 		if (!response.ok) {
// 			throw new Error('sending cart data failed');
// 		}

// 		dispatch(
// 			cartUiActions.showNotification({
// 				status: 'success',
// 				title: 'Success',
// 				message: 'Sent cart data successfully!'
// 			})
// 		);
// 	};

// 	if (isInitial) {
// 		isInitial = false;
// 		return;
// 	}

// 	sendCartData().catch((error) => {
// 		console.log(error);
// 		dispatch(
// 			cartUiActions.showNotification({
// 				status: 'error',
// 				title: 'Error',
// 				message: 'sending cart data failed'
// 			})
// 		);
// 	});
// }, [cart, dispatch]);
