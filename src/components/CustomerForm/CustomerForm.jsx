import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, Button, Grid, Container } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

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
    <Grid margin={2} > 
    {/* added container, but I'm not sure if it's necessary */}
    <Container>
        <form onSubmit={(event) => addCustomerInfo(event)}>
            <TextField
            
                id="outlined-name-input"
                variant="outlined"
                type='text'
                label="Name"
                //autoComplete="Name"
                onChange={handleNameChange}
                required
                size="small"
            />
            <br></br>
            <TextField
                id="outlined-address-input"
                variant="outlined"
                type='text'
                label="Address"
                //autoComplete="Address"
                onChange={handleAddressChange}
                required
                size="small"
            />
            <br></br>
            <TextField
                id="outlined-city-input"
                variant="outlined"
                type='text'
                label="City"
                //autoComplete="City"
                onChange={handleCityChange}
                required
                size="small"
            />
            <br></br>
            <TextField
                id="outlined-zip-input"
                variant="outlined"
                type='text'
                label="Zip"
                //autoComplete="Zip"
                onChange={handleZipChange}
                required
                size="small"
            />
            <br></br>
            <RadioGroup
                aria-labelledby="radio-buttons-group-label"
                defaultValue="delivery"
                name="radio-buttons-group"
             >
                <FormControlLabel id="pickup" name="type" value="Pickup" control={<Radio />} onChange={handleTypeChange} label="Pickup" />
                <FormControlLabel id="delivery" name="type" value="Delivery" control={<Radio />} onChange={handleTypeChange} label="Delivery" />
            </RadioGroup>
            <br></br>
            <Button 
                variant="outlined"
                type='submit'>Next</Button>

        </form>
    </Container>
    </Grid> 
        </>
    );
}

export default CustomerForm;