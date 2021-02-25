import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		with: '100%',
		height: '100%'
	},
}));

const CircularIndeterminate = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CircularProgress />
		</div>
	);
}

export default CircularIndeterminate;
