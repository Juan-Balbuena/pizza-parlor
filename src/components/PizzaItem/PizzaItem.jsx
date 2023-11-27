import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PizzaList from '../PizzaList/PizzaList.jsx';
import { Grid, Paper, Card, CardContent, Typography } from "@mui/material"

function PizzaItem(props){
    

    
    
    return (
        <Grid item xs={12} sm={10} md={6} style={{ alignContent: 'center', alignItems: 'center' }}>
        <Paper elevation={5}>
            <Card>
                <CardContent>
                    <Typography>How are you feeling today?</Typography>
                </CardContent>
            </Card>
        </Paper>
    </Grid>
    )
}

export default PizzaItem;