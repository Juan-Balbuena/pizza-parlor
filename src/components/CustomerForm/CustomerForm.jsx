

function CustomerForm() {
    //let [customerToAdd, setCustomerToAdd] = useState({name: 'test', });


    const addCustomerInfo = (event) => {
        console.log(`Adding customer info:`, customerToAdd)
        event.preventDefault();

        // let action = {
        //     type: 'ADD_CUSTOMER_INFO'
        //     payload:
        // }


    };



    return (
        <>
        <h2>Customer Information</h2>
        <form onSubmit={(event) => addCustomerInfo(event)}>
            <input 
                required
                placeholder="Name"
            />
            <br></br>
            <input 
                required
                placeholder="Street Address"
            />
            <br></br>
            <input 
                required
                placeholder="City"
            />
            <br></br>
            <input 
                required
                placeholder="Zip"
            />
            <br></br>
            <input type="radio"/>
            <br></br>
            <button type='submit'>
                Next
            </button>
        </form>
        </>
    );
}

export default CustomerForm;