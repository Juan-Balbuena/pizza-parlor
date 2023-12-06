import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const pizzas = (state = [], action) => {
    if (action.type === 'SET_PIZZA') {
        return action.payload;
    } 
    return state;
}


const cart = (state = [], action) => {

    if (action.type === 'ADD_PIZZA') {
        return [...state, action.payload.pizza];
    } else if (action.type === 'CLEAR_CART') {
        return [];
    }

    return state;
};

const customerInfo = (state = [], action) => {

    if (action.type === 'ADD_CUSTOMER_INFO') {
        return [...state, action.payload];
    } else if (action.type === 'CLEAR_CART') {
        return [];
    }

    return state;
};

const orders = (state = [], action) => {

    if (action.type === 'FETCH_ORDERS') {
        return action.payload;
    }

    return state;

};

const reduxStore = createStore(
    combineReducers({
        cart,
        customerInfo,
        pizzas,
        orders,
    }),
    applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </React.StrictMode>
);


export default reduxStore;

