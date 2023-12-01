import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function AdminTable() {

    const dispatch = useDispatch();
    const orders = useSelector(store => store.orders);

    const columns = [
        { id: 'customer_name', label: 'Customer' },
        { id: 'time', label: 'Time Order Placed' },
        { id: 'type', label: 'Type' },
        { id: 'total', label: 'Cost' },
    ];

    const options = {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    };

    const getOrders = () => {

        axios.get('/api/order')
            .then(response => {
                dispatch({ type: 'FETCH_ORDERS', payload: response.data })
            })
            .catch(error => {
                console.error(error);
                alert('Something went wrong.');
            });

    };

    const formatDate = date => {

        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

        const hour = date.getHours();
        const minute = date.getMinutes();
        const ampm = hour >= 12 ? 'pm' : 'am';

        const formattedTime = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} 
        at ${hour === 0 ? 12 : hour > 12 ? hour - 12 : hour}:${minute.toString().padStart(2, '0')}${ampm}`;

        return formattedTime;

    };



    useEffect(() => {
        getOrders();
    }, []);

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Admin</h1>
            <TableContainer component={Paper} style={{ margin: '20px', maxHeight: '400px', overflowY: 'auto' }}>
                <Table stickyHeader aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.id}>
                                    {/* <TableSortLabel
                                        active={sortedColumn === column.id}
                                        direction={sortOrder}
                                        onClick={() => handleSort(column.id)}
                                    > */}
                                    {column.label}
                                    {/* </TableSortLabel> */}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map(order => (
                            <TableRow key={order.id}>
                                <TableCell>{order.customer_name}</TableCell>
                                <TableCell>
                                    {formatDate(new Date(order.time))}
                                </TableCell>
                                <TableCell>{order.type}</TableCell>
                                <TableCell>{Number(order.total).toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                })}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )

}

export default AdminTable;