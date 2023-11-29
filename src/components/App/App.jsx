import React, { useState } from 'react';
import axios from 'axios';

import PizzaList from '../PizzaList/PizzaList.jsx';
import CheckoutPage from '../CheckoutPage/CheckoutPage.jsx';

import Pizzas from '../Pizzas/Pizzas.jsx';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import CustomerForm from '../CustomerForm/CustomerForm.jsx';
import Home from '../Home/Home.jsx';

import { HashRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min.js';

function App() {

  const [pizzaList, setPizzaList] = useState([]);

  const cart = useSelector(store => store.cart)
  const dispatch = useDispatch();

  const getPizzas = () => {
    axios.get('/api/pizza').then((response) => {
        setPizzaList(response.data);
        const action = {type: 'ADD_PIZZA', payload: response.data};
        dispatch(action);
    }).catch((error) => {
        console.log('Error getting pizza list', error);
        alert('Something went wrong!')
    })
}

useEffect(() => {
    getPizzas();
}, []);

  return (

    <>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>

      </div>

      <Router>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/order'>
          <Pizzas />
        </Route>

        <Route exact path='/address-info'>
          <CustomerForm />
        </Route>

        <Route exact path='/checkout-page'>
          <CheckoutPage />
        </Route>

      </Router >

    </>

  );
}

export default App;
