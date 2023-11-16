import React from 'react';
import PizzaItem from '../PizzaItem/PizzaItem.jsx';
import { useSelector } from 'react-redux';
import { Grid } from "@mui/material";


function PizzaList(props) {
    const cart = useSelector(store => store.cart)

    return (
       <Grid container spacing={2}>
        {
            props.pizzaList.map((pizza, i) => {
                return <PizzaItem key={i} />
            })
        }
        
       </Grid>
    )
}

export default PizzaList;