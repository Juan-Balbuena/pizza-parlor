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
import AdminTable from '../AdminTable/AdminTable.jsx';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { HashRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min.js';

function App() {

  const [pizzaList, setPizzaList] = useState([]);

  const cart = useSelector(store => store.cart);
  console.log(cart);

  const prices = cart.reduce((sumPrice, item) => Number(sumPrice) + Number(item.price), 0);

  const formattedPrice = prices.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const dispatch = useDispatch();

  const getPizzas = () => {
    axios.get('/api/pizza').then((response) => {
      setPizzaList(response.data);
      const action = { type: 'SET_PIZZA', payload: response.data };
      dispatch(action);
    }).catch((error) => {
      console.log('Error getting pizza list', error);
      alert('Something went wrong!');
    })
  }

  useEffect(() => {
    getPizzas();
  }, []);

  return (

    <>

      <div className='App'>

        <header className='App-header'>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <h1 className='App-title' style={{ textAlign: 'left' }}>Prime Pizza</h1>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h2 className='price' style={{ margin: '0', marginRight: '10px' }}>{formattedPrice}</h2>
              <ShoppingCartIcon />
            </div>
          </div>
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

        <Route exact path='/admin'>
          <AdminTable />
        </Route>

      </Router >

    </>

  );
}

export default App;
