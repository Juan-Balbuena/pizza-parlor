import React from 'react';
import PizzaList from '../PizzaList/PizzaList.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from "@mui/material";
import { useEffect, useState } from 'react';
import axios from 'axios';


function Pizzas() {
    
    const dispatch = useDispatch();
    // const [pizzas, setPizzas] = useState([]);

  const getPizzas = () => {
    axios.get('/api/pizza').then((response) => {
    //   setPizzas(response.data);  
      const action = {type: 'SET_PIZZA', payload: response.data};
      dispatch(action);
    }).catch((error) => {
      console.log('Error getting pizza list.', error);
      alert('Something went wrong!')
    })
  }
  // console.log(pizzas);
  useEffect(() => {
    getPizzas();
  }, []);

    return (
       <div>
        <h2>Pizza Choices</h2>
        <PizzaList />

       </div>
    )
}

export default Pizzas;