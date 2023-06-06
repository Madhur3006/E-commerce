export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST'
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
export const GET_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED'
export const ADD_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
export const ADD_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED'
export const EDIT_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED'
export const EDIT_PRODUCT_SUCCESS = 'EDIT_PRODUCT_SUCCESS'
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS'
export const DELETE_PRODUCT_FAILED = 'DELETE_PRODUCT_FAILED'

export const getProductsRequest = () => {
    return {
        type: GET_PRODUCTS_REQUEST,
    }
}

export const getProductsSuccess = (products) => {
    return {
    type: GET_PRODUCTS_SUCCESS,
    payload: products 
    }
}

export const getProductsFailed = (error) => {
    return {
        type: GET_PRODUCTS_FAILED,
        payload: error
    }
}

export const addProductSuccess = (product) => {
    return {
        type: ADD_PRODUCTS_SUCCESS,
        payload: product 
    }
}

export const addProductFailed = (error) => {
    return {
        type: ADD_PRODUCTS_FAILED,
        payload: error 
    }
}

export const editProductSuccess = (Product, id) => {
    return {
        type: EDIT_PRODUCT_SUCCESS,
        payload: Product 
    }
}

export const editProductFailed = (error) => {
    return {
        type: EDIT_PRODUCT_SUCCESS,
        payload: error 
    }
}

export const deleteProductSuccess = (id) => {
    return {
        type: DELETE_PRODUCT_SUCCESS,
        payload: id 
    }
}

export const deleteProductFailed = (error) => {
    return {
        type: DELETE_PRODUCT_FAILED,
        payload: error 
    }
}

