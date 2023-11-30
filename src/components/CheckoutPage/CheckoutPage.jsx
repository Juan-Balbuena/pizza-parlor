// import React, { useEffect } from 'react';
// import { useDispatch, useSelector} from 'react-redux';


// function CheckoutPage () {
// const customerInfo = useSelector(store => store.customerInfo);
// const cart = useSelector(store => store.cart);


// console.log(cart);
//     return(
//         <>
//         <h1>Step 3: Checkout</h1>
//         <ul>
//             {customerInfo.map((customer, index) =>
//             <li key={index}>
//                 {customer.name} <br></br>
//                 {customer.streetAddress} <br></br>
//                 {customer.city} <br></br>
//                 {customer.zip} <br></br>
//                 {customer.type} <br></br>
//             </li>
//             )}
//         </ul>

//         <table>
//                <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Price</th>
//                 </tr>
//                </thead>

//                <tbody>
//                     {cart.map((item, index) =>
//                         <tr key={index}>
//                             <td>{item.name}</td> 
//                             <td>{item.price}</td>
//                         </tr>
//                     )}
//                </tbody>
//             </table>
//         </>
//     )
// }

// export default CheckoutPage;
















import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './CheckoutPage.css';


function CheckoutPage () {
const customerInfo = useSelector(store => store.customerInfo);
const cart = useSelector(store => store.cart);


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
              //sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
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
        </>
    )
}

export default CheckoutPage;