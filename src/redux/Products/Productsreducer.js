import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILED, ADD_PRODUCTS_SUCCESS, ADD_PRODUCTS_FAILED, EDIT_PRODUCT_SUCCESS, EDIT_PRODUCTS_FAILED, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILED } from "./Productstypes";

const initialState = {
    loading: false,
    products: [],
    error: null 
}

const productReducer = (state = initialState, action) => {

    switch(action.type) {
        case GET_PRODUCTS_REQUEST: return {
            ...state, 
            loading: true 
        }

        case GET_PRODUCTS_SUCCESS: return {
            loading: false,
            products: action.payload,
            error: null
        }

        case GET_PRODUCTS_FAILED: return {
            loading: false,
            products: [],
            error: action.payload 
        }

        case ADD_PRODUCTS_SUCCESS: return {
            loading: false,
            products: [...state, action.payload],
            error: null
        }

        case ADD_PRODUCTS_FAILED: return {
             ...state,
             error: action.payload 
        }

        case EDIT_PRODUCT_SUCCESS: 
        const edited = state.products.map(product => product.id===action.payload.id ? action.payload : product)
        return {
            ...state, 
            products: edited 
        }

        case EDIT_PRODUCTS_FAILED:
            return {
                ...state, 
                error: action.payload 
        }

        case DELETE_PRODUCT_SUCCESS: 
            const deleted = state.products.filter(product => product.id !== action.payload)
            return {
                ...state, 
                products: deleted 
            }

        case DELETE_PRODUCT_FAILED: return {
            ...state,
            error: action.payload 
        }
    }


}

export default productReducer