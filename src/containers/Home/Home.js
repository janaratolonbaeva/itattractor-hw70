import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Dish from "../../components/Dish/Dish";
import Cart from "../../components/Cart/Cart";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {fetchDishes} from "../../store/actions/dishesActions";
import {addDish, setPurchasing} from "../../store/actions/cartActions";
import TransitionsModal from "../../components/UI/Modal/Modal";
import Progress from "../../components/UI/Progress/Progress";

const useStyles = makeStyles(() => ({
	root: {
		margin: '20px auto'
	},
	gridItem : {
		padding: '20px'
	}
}));

const Home = () => {
	const dispatch = useDispatch();
	const dishes = useSelector(state => state.dishes.dishes);
	const loading = useSelector(state => state.dishes.dishLoading);
	const cart = useSelector(state => state.cart.cart);
	const [show, setShow] = useState(false);

	const classes = useStyles();

	useEffect(() => {
		dispatch(fetchDishes());
	}, [dispatch]);

	const addDishToCart = (dish) => {
		dispatch(addDish(dish));
	}

	let dishesContainer = (
		dishes ? Object.keys(dishes).map((item, index) => {
			return (
				<Dish
					add={() => addDishToCart(dishes[item])}
					key={index} image={dishes[item].image}
					title={dishes[item].title}
					price={dishes[item].price}
				/>
			)
		}) : null
	)

	if (loading) {
		dishesContainer = <Progress/>
	}

	const isPurchasable = () => {
		if (cart.length > 0) {
			dispatch(setPurchasing(true));
		}
	}

	const handleShow = () => {
		setShow(true);
	}

	return (
		<Container maxWidth="md" className={classes.root}>
			<Grid container justify="space-between">
				<Grid item xs={7} container direction="column" className={classes.gridItem}>
					{dishesContainer}
				</Grid>
				<Grid item xs={5} className={classes.gridItem}>
					<Cart showPopup={handleShow} purchasable={isPurchasable}/>
				</Grid>
			</Grid>

			<TransitionsModal show={show} handleClose={() => setShow(false)}/>

		</Container>
	);
};

export default Home;