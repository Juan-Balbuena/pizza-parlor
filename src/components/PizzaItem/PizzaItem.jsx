import { useDispatch } from 'react-redux';
import { Grid, Paper, Card, CardContent, Typography, CardMedia, Button, Container } from "@mui/material"

function PizzaItem({ pizza }){
    const dispatch = useDispatch();

    const addPizzaToCart = () => {
        console.log(pizza);
        dispatch({ type: 'ADD_PIZZA', payload: pizza })
    }


    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 4, sm: 5, md: 6 }} style={{ textAlign: 'center', display: 'wrap' }}>
        <Grid item xs={4}  display={'flex-wrap'}>
        <Paper elevation={5}>
            <Card display={'flex'}>
                <CardContent style={{ justifyContent: 'space-evenly' }}>
                    <CardMedia image={pizza.image_path} style={{height: 140}}/>
                    <Typography sx={{ fontWeight: 'bold' }}>{pizza.name}</Typography>
                    <br></br>
                    <Typography>{pizza.description}</Typography> 
                    <br></br>
                    <Typography sx={{ fontWeight: 'bold' }}>{pizza.price}</Typography>
                    <Button variant="contained" color="success"
                        onClick={addPizzaToCart} >Add To Cart</Button>
                </CardContent>
            </Card>
        </Paper>
        </Grid>
    </Grid>
        
    )
}

export default PizzaItem;