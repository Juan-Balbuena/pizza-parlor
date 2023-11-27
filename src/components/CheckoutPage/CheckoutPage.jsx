import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';

function CheckoutPage () {
const customerInfo = useSelector(store => store.customerInfo);



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

        
        
        </>
    )
}

export default CheckoutPage;