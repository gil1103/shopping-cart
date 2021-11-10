import classes from './CartButton.module.css';
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from '../../store/cartUiSlice';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const totalQuantity = useSelector((state) => state.content.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(cartUiActions.toggleCart())
  }

  return (
		<button className={classes.button} onClick={toggleCartHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>{totalQuantity}</span>
		</button>
	);
};

export default CartButton;
