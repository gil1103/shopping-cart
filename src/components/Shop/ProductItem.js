import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartContentActions } from './../../store/cartContentSlice';

const ProductItem = (props) => {
	const { title, price, description, id, imageUrl } = props;
	const dispatch = useDispatch();
	const onAddItemToCart = () => {
		dispatch(
			cartContentActions.addItemToCart({
				id,
				title,
				price,
				description,
				imageUrl
			})
		);
	};

	return (
		<li className={classes.item}>
			<Card>
				<header>
					<h3>{title}</h3>
					<div className={classes.price}>${price.toFixed(2)}</div>
				</header>
				<div className={classes.image_container}>
					<img src={imageUrl} alt="" />
					<p>{description}</p>
				</div>
				<div className={classes.actions}>
					<button onClick={onAddItemToCart}>Add to Cart</button>
				</div>
			</Card>
		</li>
	);
};

export default ProductItem;
