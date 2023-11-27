import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pizzas from '../Pizzas/Pizzas.jsx';
import { Grid, Paper, Card, CardContent, Typography, CardMedia, Button } from "@mui/material"

function PizzaItem({ pizza }){
    const dispatch = useDispatch();

    const addPizzaToCart = () => {
        dispatch({ type: 'ADD_PIZZA', payload: pizza })
    }

    
    
    return (
        <Grid item xs={12} md={6} style={{ textAlign: 'center' }}>
        <Paper elevation={5}>
            <Card>
                <CardContent style={{ justifyContent: 'space-evenly' }}>
                    <CardMedia image={pizza.image_path} style={{height: 140}}/>
                    <Typography sx={{ fontWeight: 'bold' }}>{pizza.name}</Typography>
                    <br></br>
                    <Typography>{pizza.description}</Typography> 
                    <br></br>
                    <Typography sx={{ fontWeight: 'bold' }}>{pizza.price}</Typography>
                    <Button variant="outlined"
                        onClick={addPizzaToCart} >Add To Cart</Button>
                </CardContent>
            </Card>
        </Paper>
    </Grid>
        
    )
}

export default PizzaItem;