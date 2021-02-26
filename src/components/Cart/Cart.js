import React from 'react';
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {useDispatch, useSelector} from "react-redux";
import {removeDish} from "../../store/actions/cartActions";
import Progress from "../UI/Progress/Progress";

const useStyle = makeStyles(() => ({
	root: {
		padding: '20px 15px'
	},
	title: {
		marginBottom: '20px',
		textAlign: 'center'
	},
	text: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	totalBlock: {
		paddingTop: '10px',
		borderTop: '1px solid #ccc',
		marginBottom: '20px'
	},
	buttonWrapper: {
		display: 'flex',
		justifyContent: 'center'
	},
	dishInCart: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	btn: {
		marginLeft: '10px',
		padding: '0',
		minWidth: '10px'
	}
}));

const Cart = (props) => {
	const dispatch = useDispatch();
	const dish = useSelector(state => state.cart.cart);
	const loading = useSelector(state => state.cart.orderLoading);
	const classes = useStyle();

	let initialValue = 0

	let total = dish.reduce(function (accumulator, currentValue) {
		currentValue = currentValue.count * currentValue.price;
		return accumulator + currentValue
	}, initialValue);

	const delivery = 150;
	total += delivery;


	const removeItem = (title) => {
		dispatch(removeDish(title));
	}

	let cartContainer = (
		<Paper className={classes.root}>
			<Typography
				variant="h6"
				className={classes.title}
			>
				Cart
			</Typography>
			<div>
				{dish.map((item, index) => {
					return (
						<Typography key={index} className={classes.dishInCart} gutterBottom>
							<span>{item.title} x {item.count}</span>
							<span className={classes.dishInCart}>
								{item.price * item.count}
								<Button
									className={classes.btn}
									onClick={() => removeItem(item.title)}
								>
									<HighlightOffIcon/>
								</Button>
							</span>
						</Typography>
					)
				})}
			</div>
			<div className={classes.totalBlock}>
				<Typography className={classes.text} gutterBottom>
					<span>Доставка</span>
					<strong>150</strong>
				</Typography>
				<Typography className={classes.text} gutterBottom>
					<span>Итого</span>
					<strong>{total}</strong>
				</Typography>
			</div>
			<div className={classes.buttonWrapper}>
				<Button
					variant="contained"
					color="secondary"
					onClick={props.showPopup}
					disabled={dish.length < 1 && true}
				>
					Заказать
				</Button>
			</div>
		</Paper>
	)

	if (loading) {
		cartContainer = <Progress/>
	}

	return (
		<>
			{cartContainer}
		</>
	);
}

export default Cart;