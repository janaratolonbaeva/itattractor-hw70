import axios from 'axios';

const axiosDishes = axios.create({
	baseURL: 'https://dishes-3cbf9-default-rtdb.firebaseio.com'
});

export default axiosDishes;