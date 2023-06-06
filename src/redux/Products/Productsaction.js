import { getProductsRequest, getProductsSuccess, getProductsFailed, addProductsSuccess, addProductsFailed, editProductSuccess, editProductFailed, deleteProductSuccess, deleteProductFailed } from "./Productstypes";
import axios from 'axios'

export const fetchProducts = () => {
    return function(dispatch) {
        dispatch(getProductsRequest())
        axios.get('https://fakestoreapi.com/products')
        .then(response => {
            const products = response.data
            dispatch(getProductsSuccess(products))
        })
        .catch(error => {
            dispatch(getProductsFailed(error.message))
        })
    }
}

export const addProduct = (newProduct) => {
    return function(dispatch) {
        axios.post('https://fakestoreapi.com/products', newProduct)
        .then(response => {
            dispatch(addProductSuccess(response.data))
        })
        .catch(error => {
            dispatch(addProductFailed(error.message))
        })
    }
}

export const EditProduct = (Product, id) => {
    return function(dispatch) {
        axios.put(`https://fakestoreapi.com/products/${id}`, Product)
        .then(response => {
            dispatch(editProductSuccess(response.data))
        })
        .catch(error => {
            dispatch(editProductFailed(error.message))
        })
    }
}

export const deleteProduct = (id) => {
    return function(dispatch) {
        axios.delete(`https://fakestoreapi.com/products/${id}`)
        .then(response => {
            dispatch(addProductsSuccess(id))
        })
        .catch(error => {
            dispatch(addProductsFailed(error.message))
        })
    }
}