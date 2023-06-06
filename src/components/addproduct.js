import React, {useState, useEffect, useRef} from 'react';
import {useAuth} from './auth'
import axios from 'axios'

const AddProduct = () => {

    const auth = useAuth()
   
    const [Title, setTitle] = useState('')
    const [Price, setPrice] = useState(0)
    const [Description, setDescription] = useState('')
    const [Category, setCategory] = useState('')
    const [Image, setImage] = useState('')
    const [Rate, setRate] = useState(0)
    const [Count, setCount] = useState(0)
    const [isAdded, setIsAdded] = useState(false)

    const titleRef = useRef(null)

    const handleAddProduct = e => {
        e.preventDefault()
        axios.post('https://fakestoreapi.com/products', {
            id: apiData.length+1, 
            title: Title,
            price: Price,
            description: Description,
            category: Category,
            image: Image,
            rating: {rate: Rate, count: Count}
        }).then(() => {
            setIsAdded(true)
        }).catch(error => {
            console.log(error)
        })
    }
    
    var [apiData, setApiData] = useState([])
    const ProductCount  = () => {
         fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => setApiData(data))
        // console.log(apiData.length)
    }

    useEffect(() => {
        ProductCount()
    }, [isAdded])

    return ( 
        <div>
            <h2>Add New Product</h2>
            <form onSubmit = {handleAddProduct}>
                <div>
                   ID : {apiData.length+1}
                </div>
                <label>
                    Product Title: <input type ='text' value = {Title} onChange = {(e) => setTitle(e.target.value)} ref = {titleRef}/>
                </label>
                <label>
                    Product Price: <input type ='text' value = {Price} onChange = {(e) => setPrice(e.target.value)} />
                </label>
                <label>
                    Product Description: <input type ='text' value = {Description} onChange = {(e) => setDescription(e.target.value)} />
                </label>
                <label>
                    Product Category: <input type ='text' value = {Category} onChange = {(e) => setCategory(e.target.value)} />
                </label>
                <label>
                    Product Image Link: <input type ='text' value = {Price} onChange = {(e) => setPrice(e.target.value)} />
                </label>
                <label>
                    Product Rating: <input type ='text' value = {Rate} onChange = {(e) => setRate(e.target.value)} />
                </label>
                <label>
                    Product Availaiblity Count: <input type ='text' value = {Count} onChange = {(e) => setCount(e.target.value)} />
                </label>
                <label>
                    <input type='submit' value = 'Add Product' />
                </label>
            </form>
            {isAdded ? 'Product Added' : null }
        </div>
     );
}
 
export default AddProduct;