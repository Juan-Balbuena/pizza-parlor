import React from 'react';
import { useSelector } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem';
import { Grid, Paper, Card, CardContent, Typography } from '@mui/material';

function PizzaList() {
    const pizzas = useSelector(store => store.pizzas)
    console.log(pizzas);
    return (
        <Grid container xs={12} md={6}>
            
          
                {
                    pizzas.map((pizza, i) => <PizzaItem key={i} pizza={pizza} />)
                }
        
        </Grid>
    )
}

export default PizzaList;