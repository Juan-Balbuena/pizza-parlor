import React from 'react';
import { useSelector } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem';
import { Grid } from '@mui/material';

function PizzaList() {
    const pizzas = useSelector(store => store.pizzas)
    return (
        <Grid>
            
          
                {
                    pizzas.map((pizza, i) => <PizzaItem key={i} pizza={pizza} />)
                }
        
        </Grid>

    )
}

export default PizzaList;