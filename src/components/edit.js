import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Update = () => {

    const navigate = useNavigate()
    
    const [Id, setId] = useState(null)
    const [Title, setTitle] = useState(null)
    const [Price, setPrice] = useState(null)
    const [Description, setDescription] = useState(null)
    const [Category, setCategory] = useState(null)
    const [Image, setImage] = useState(null)
    const [Rate, setRate] = useState(null)
    const [Count, setCount] = useState(null)

    useEffect(() => {
        setId(localStorage.getItem('id'))
        setTitle(localStorage.getItem('title'))
        setPrice(localStorage.getItem('price'))
        setDescription(localStorage.getItem('description'))
        setCategory(localStorage.getItem('category'))
        setImage(localStorage.getItem('image'))
        setRate(localStorage.getItem('rate'))
        setCount(localStorage.getItem('count'))
    }, [])

    const [isUpdated, setIsUpdated] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`https://fakestoreapi.com/products/${Id}`, {
            id: Id,
            title: Title,
            price: Price,
            description: Description,
            category: Category,
            image: Image,
            rating: {rate: Rate, count: Count}
        }).then(() => {
            setIsUpdated(true)
            console.log('Madhur')
        })
    }

    return ( 
        <>
        <div>
            <form>
                <div>
                <label>
                    Id : <input type = 'text' value = {Id} onChange={(e) => setId(e.target.value)} />
                </label>
                </div>
                <div>
                <label>
                    Title : <input type = 'text' value = {Title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                </div>
                <div>
                <label>
                    Price : <input type = 'text' value = {Price} onChange={(e) => setPrice(e.target.value)} />
                </label>
                </div>
                <div>
                <label>
                    Description : <input type = 'text' value = {Description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                </div>
                <div>
                <label>
                    Category : <input type = 'text' value = {Category} onChange={(e) => setCategory(e.target.value)} />
                </label>
                </div>
                <div>
                <label>
                    Image : <input type = 'text' value = {Image} onChange={(e) => setImage(e.target.value)} />
                </label>
                </div>
                <div>
                <label>
                    Rate : <input type = 'text' value = {Rate} onChange={(e) => setRate(e.target.value)} />
                </label>
                </div>
                <div>
                <label>
                    Count : <input type = 'text' value = {Count} onChange={(e) => setCount(e.target.value)} />
                </label>
                </div>
                <div>
                <label>
                    <button onClick = {() => handleSubmit()}>Submit</button>
                </label>
                </div>
            </form>
            {isUpdated ? 'updated' : null}
            <div>
                <button onClick = {() => navigate('/editdelete')}>Back to Search</button>
            </div>
        </div>
        </>
     );
}
 
export default Update;