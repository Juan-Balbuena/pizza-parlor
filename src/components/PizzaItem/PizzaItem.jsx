import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PizzaList from '../PizzaList/PizzaList.jsx';

function PizzaItem(){
    const cart = useSelector(store => store.cart)
    const dispatch = useDispatch();

    const setPizza = () => {
        axios.get('/api/pizza').then((response) => {
            const action = {type: 'ADD_PIZZA', payload: response.data};
            dispatch(action);
        }).catch((error) => {
            console.log('Error getting pizza list', error);
            alert('Something went wrong!')
        })
    }

    useEffect(() => {
        setPizza();
    }, []);
    
    return (
        <div>
            <h2>Step 1: Select Your Pizza</h2>

            <PizzaList />
        </div>
    )
}

export default PizzaItem;