import React from 'react';
import { useSelector } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem';
import { Grid, Container } from '@mui/material';

function PizzaList() {
    const pizzas = useSelector(store => store.pizzas)
    return (
        <Container maxWidth="md">
            <Grid container spacing={3}>
                {
                    pizzas.map((pizza, i) => <PizzaItem key={i} pizza={pizza} />)
                }
            </Grid>
        </Container>

    )
}

export default PizzaList;







