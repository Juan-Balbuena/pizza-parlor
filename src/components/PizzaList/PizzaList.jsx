import React from 'react';
import PizzaListItem from '../PizzaListItem/PizzaListItem.jsx';
import { useSelector } from 'react-redux';
import { Grid } from "@mui/material";


function PizzaList() {
    const cart = useSelector(store => store.cart)

    return (
    //    <Grid container spacing={2}>
    //     {
    //         cart.map((cart, i) => {
    //             return <PizzaListItem key={i} cart={cart} />
    //         })
    //     }
        
    //    </Grid>
    <h1>Hey</h1>
    )
}

export default PizzaList;