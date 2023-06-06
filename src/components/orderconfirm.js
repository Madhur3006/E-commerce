import React from 'react';
import { useNavigate } from 'react-router-dom'

const OrderConfirm = () => {

    const navigate = useNavigate()

    return ( 
        <div>
            <h2>Order Confirm</h2>
            <button onClick = {() => navigate('/products', {replace: true})}>Products</button>
            <button onClick = {() => navigate('/', {replace: true})}>Home</button>
        </div>
     );
}
 
export default OrderConfirm;