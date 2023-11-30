import React from 'react';
import PizzaList from '../PizzaList/PizzaList.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { Button} from "@mui/material";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min.js';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

function Pizzas() {
    
    const dispatch = useDispatch();
    // const [pizzas, setPizzas] = useState([]);
    const history = useHistory();

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
      <>
        <p>Pizza Choices</p>
        <PizzaList />
        <br></br>
        <Button variant="outlined" onClick={e => history.push('/address-info')}
                endIcon={<ArrowCircleRightOutlinedIcon />}>Customer Info</Button>
      </>
    )
}

export default Pizzas;