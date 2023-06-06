import React, {useState,  useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const Cart = ({ cartItems, removeFromCart, resetCart}) => {

    const navigate = useNavigate()

    const handleOnConfirm = () => {
        resetCart()
        navigate('/orderconfirm', {replace: true})
    }

    const [totalValue, setTotalValue] = useState(0)

    
     
    // return () => {
    // if(cartItems.length()!=0){
    return ( 
        <>
            <div>
                <Link to = '/products'>
                <button>Return to Products</button>
                </Link>
            </div>
            <div>
                <h2>Madhur Details</h2>
            </div>
            {cartItems.length!=0 ? cartItems.length : 'Cart Empty'}
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                            {cartItems && cartItems.map((item, index) => {
                                
                                return (
                                    
                                     <tr>
                                       <td>{index+1}</td>
                                       <td>{item.title}</td>
                                       <td>{item.price}</td>
                                       <td>
                                         <button onClick = {() => {removeFromCart(item.id)}}>Remove from cart</button>
                                       </td>
                                     </tr>
                                    
                                )
                            }
                                
                            )}
                    </tbody>
                </table>
                <h6>totalAmount {cartItems ? `$${totalValue}` : 0}</h6> 
                <button isdisabled = {cartItems ? true : false} onClick = {() => handleOnConfirm}>confirm Order</button> 
            </div>
            
        </>
    )
}
 
export default Cart;