import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Grid, Container } from "@mui/material";
import './CheckoutPage.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function CheckoutPage () {
const dispatch = useDispatch();
let history = useHistory();
const customerInfo = useSelector(store => store.customerInfo);
const cart = useSelector(store => store.cart);



const handleCheckout = (event) => {
    console.log("Starting handle Checkout")
    event.preventDefault();
    console.log(customerInfo[0]);
    console.log(cart[0]);
    console.log(cart);
    
    const finalTotal = cart.reduce((sumPrice, item) => Number(sumPrice) + Number(item.price), 0);
    console.log(finalTotal);

    axios.post('/api/order', {
        customer_name: customerInfo[0].name,
        street_address: customerInfo[0].streetAddress,
        city: customerInfo[0].city,
        zip: customerInfo[0].zip,
        type: customerInfo[0].type,
        total: finalTotal
    })
    let action = {
        type: 'CLEAR_CART'
    }
    dispatch(action);
    history.push("/")
}


console.log(cart);
    return(
        <>
        <h1>Step 3: Checkout</h1>
        <ul>
            {customerInfo.map((customer, index) =>
            <li key={index}>
                {customer.name} <br></br>
                {customer.streetAddress} <br></br>
                {customer.city} <br></br>
                {customer.zip} <br></br>
                {customer.type} <br></br>
            </li>
            )}
        </ul>


    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell class="column-header" sx={{ color: "red"}}>Name</TableCell>
            <TableCell class="column-header" align="right">Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item, index) => (
            <TableRow
              key={index}
            >
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="right">{item.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br></br>
    <Button variant="outlined" onClick={handleCheckout}>Checkout</Button>


        </>
    )
}

export default CheckoutPage;