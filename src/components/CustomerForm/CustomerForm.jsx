import { useDispatch } from 'react-redux';
import { useState } from 'react';

function CustomerForm() {
    const dispatch = useDispatch();

    let [customerToAdd, setCustomerToAdd] = useState({
        name: '', 
        streetAddress: '',
        city: '',
        zip: '',
        //type: ''
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
            name: event.target.value,
        });
     }

     const handleCityChange = (event) => {
        setCustomerToAdd({
            ...customerToAdd,
            name: event.target.value,
        });
     }

     const handleZipChange = (event) => {
        setCustomerToAdd({
            ...customerToAdd,
            name: event.target.value,
        });
     }





    const addCustomerInfo = (event) => {
        console.log(`Adding customer info:`, customerToAdd)
        event.preventDefault();
        
        const action = { type: 'ADD_CUSTOMER_INFO', payload: setCustomerToAdd };
         dispatch(action);


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
            {/* <input type="radio"/> */}
            <br></br>
            <button type='submit'>
                Next
            </button>
        </form>
        </>
    );
}

export default CustomerForm;