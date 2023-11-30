import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';


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

        <table>
               <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
               </thead>

               <tbody>
                    {cart.map((item, index) =>
                        <tr key={index}>
                            <td>{item.name}</td> 
                            <td>{item.price}</td>
                        </tr>
                    )}
               </tbody>
            </table>
        </>
    )
}

export default CheckoutPage;