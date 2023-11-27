import React, { useState } from 'react';
import axios from 'axios';
import PizzaList from '../Pizzas/Pizzas.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import CustomerForm from '../CustomerForm/CustomerForm.jsx';

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
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <PizzaList setPizzaList={setPizzaList} pizzaList={pizzaList} />
  
      <CustomerForm />
    </div>
  );
}

export default App;
