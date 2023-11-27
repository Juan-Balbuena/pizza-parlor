import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function CustomerForm() {
    let history = useHistory();
    const dispatch = useDispatch();
    const customerInfo = useSelector(store => store.customerInfo);
    

    let [customerToAdd, setCustomerToAdd] = useState({
        name: '', 
        streetAddress: '',
        city: '',
        zip: '',
        type: ''
     });


     const handleNameChange = (event) => {
        setCustomerToAdd({
            ...customerToAdd,
            name: event.target.value,
        });
     }

     const handleAddressChange = (event) => {
        setCustomerToAdd({
            ...customerToAdd,
            streetAddress: event.target.value,
        });
     }

     const handleCityChange = (event) => {
        setCustomerToAdd({
            ...customerToAdd,
            city: event.target.value,
        });
     }

     const handleZipChange = (event) => {
        setCustomerToAdd({
            ...customerToAdd,
            zip: event.target.value,
        });
     }

     const handleTypeChange = (event) => {
        setCustomerToAdd({
            ...customerToAdd,
            type: event.target.value,
        });
     }




    const addCustomerInfo = (event) => {
        console.log(`Adding customer info:`, customerToAdd)
        event.preventDefault();
        
        const action = { type: 'ADD_CUSTOMER_INFO', payload: customerToAdd };
         dispatch(action);

        history.push("/checkout-page")

    };



    return (
        <>
        <h2>Customer Information</h2>
        <form onSubmit={(event) => addCustomerInfo(event)}>
            <input 
                onChange={handleNameChange}
                required
                type='text'
                placeholder="Name"
            />
            <br></br>
            <input 
                onChange={handleAddressChange}
                required
                type='text'
                placeholder="Street Address"
            />
            <br></br>
            <input 
                onChange={handleCityChange}
                required
                type='text'
                placeholder="City"
            />
            <br></br>
            <input 
                onChange={handleZipChange}
                required
                type='text'
                placeholder="Zip"
            />
            <br></br>
            <input 
                onChange={handleTypeChange}
                type="radio"
                id="pickup"
                name="type"
                value="Pickup"
            />
            <label for="pickup">Pickup</label> 
            <input 
                onChange={handleTypeChange}
                type="radio"
                id="delivery"
                name="type"
                value="Delivery"
            />
            <label for="delivery">Delivery</label> 
            <br></br>
            <button type='submit'>
                Next
            </button>
        </form>


        </>
    );
}

export default CustomerForm;