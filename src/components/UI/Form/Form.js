import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {createOrder, initOrder} from "../../../store/actions/cartActions";

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1),
	},
}));

const InputWithIcon = ({show}) => {
	const dispatch = useDispatch();
	const cart = useSelector(state => state.cart.cart);
	const classes = useStyles();

	const [customer, setCustomer] = useState({
		name: '',
		phone: '',
		address: '',
	});

	const customerDataChanged = event => {
		const {name, value} = event.target;

		setCustomer(prevState => ({
			...prevState,
			[name]: value
		}));
	};

	const orderHandler = event => {
		event.preventDefault();

		let order = cart.map(item => {
			let newObj = {
				title: item.title,
				count: item.count
			}
			return newObj;
		});

		order = {
			...order,
			customer: {...customer}
		}

		dispatch(createOrder(order));
		dispatch(initOrder());
	}

	return (
		<form onSubmit={orderHandler}>
			<Grid container alignItems="flex-end">
				<Grid item xs={6}>
					<TextField
						className={classes.margin}
						label="Имя"
						name="name"
						onChange={customerDataChanged}
						value={customer.name}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<AccountCircle />
								</InputAdornment>
							),
						}}
					/>
					</Grid>
				<Grid item xs={6}>
					<TextField
						className={classes.margin}
						label="Номер телефона"
						name="phone"
						onChange={customerDataChanged}
						value={customer.phone}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<AccountCircle />
								</InputAdornment>
							),
						}}
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						className={classes.margin}
						label="Адрес"
						name="address"
						onChange={customerDataChanged}
						value={customer.address}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<AccountCircle />
								</InputAdornment>
							),
						}}
					/>
				</Grid>
				<Grid item xs={6}>
					<Button
						type="submit"
						variant="contained"
						color="secondary"
						onClick={show}
					>
						Отправить
					</Button>
				</Grid>
			</Grid>
		</form>
	);
}

export default InputWithIcon;