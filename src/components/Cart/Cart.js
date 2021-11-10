import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
	const cartItems = useSelector((state) => state.content.items);
	return (
		<Card className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			{cartItems.map((item) => {
				return (
					<ul key={item.id}>
						<CartItem			
							item={{
								id: item.id,
								title: item.title,
								quantity: item.quantity,
								total: item.quantity * item.price,
								price: item.price
							}}
						/>
					</ul>
				);
			})}
		</Card>
	);
};

export default Cart;
