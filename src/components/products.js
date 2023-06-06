import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom' 
import { useAuth } from './auth'


const Products = ({cartItems,  addToCart }) => {

    const navigate = useNavigate()

    const auth = useAuth()

    const [apiData, setApiData] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => setApiData(data))
    }, [])

    

    return ( 
        <>
        <div>
            <h2>All Products</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        {/* <th>Title</th> */}
                        <th>Price</th>
                        {/* <th>Description</th> */}
                        <th>Category</th>
                        <th>Image</th>
                        <th>Rating</th>
                        <th>Items Left</th>
                        <th>
                            <Link to = '/cart'>
                                <button >My Cart {(cartItems && auth.user) ? cartItems.length : 0}</button>
                            </Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {apiData.map((item) => {
                        return (
                            <>
                                <tr>
                                    <td>{item.id}</td>
                                    {/* <td>{item.title}</td> */}
                                    <td>`${item.price}'</td>
                                    {/* <td>{item.description}</td> */}
                                    <td>{item.category}</td>
                                    <td><img src = {item.image} alt = 'Loading...' height = '50px' width = '50px' /></td>
                                    <td>{item.rating.rate}</td>
                                    <td>Left - {item.rating.count}</td>
                                    <td>
                                        
                                        <button onClick = {() => {
                                            if (!auth.user && auth.user==='admin'){
                                                navigate('/login')
                                            }else{
                                                addToCart(item)
                                            }
                                        }}>Add to cart</button>
                                    
                                    </td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
            <h3>End of Page</h3>
        </div>
        </>
     );
}
 
export default Products;