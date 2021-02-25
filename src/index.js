import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import dishesReducer from "./store/reducers/dishesReducer";
import cartReducer from "./store/reducers/cartReducer";

import App from './App';
import './index.css';


const rootReducer = combineReducers({
  dishes: dishesReducer,
  cart: cartReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(thunk));
const store = createStore(rootReducer, enhancers);

const app = (
  <Provider store={store}>
      <App/>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
