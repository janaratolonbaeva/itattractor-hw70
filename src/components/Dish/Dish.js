import React from 'react';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyle = makeStyles(() => ({
	root: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '10px',
		marginBottom: '30px'
	},
	contentBlock: {
		display: 'flex',
	},
	cover: {
		width: '150px',
		height: '150px',
		overflow: 'hidden',
		borderRadius: '4px'
	},
	content: {
		display: 'flex',
		flexDirection: 'column'
	},
	title: {
		marginBottom: '20px'
	},
	icon: {
		marginRight: '10px'
	}
}));

const Dish = ({image, title, price, add}) => {
	const classes = useStyle();

	return (
		<Card className={classes.root}>
			<div className={classes.contentBlock}>
				<CardMedia
					className={classes.cover}
					image={image}
					title="Live from space album cover"
				/>
				<CardContent className={classes.content}>
					<Typography component="h6" variant="h6" className={classes.title}>
						{title}
					</Typography>
					<Typography color="textSecondary">
						<strong>{price} </strong> KGS
					</Typography>
				</CardContent>
			</div>
			<div>
				<Button onClick={add} variant="contained" color="secondary">
					<ShoppingCartIcon className={classes.icon}/>
					В корзину
				</Button>
			</div>
		</Card>
	);
};

export default Dish;