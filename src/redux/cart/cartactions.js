import { MY_CART, ADD_TO_CART, DELETE_FROM_CART, RESET_CART } from "./carttypes";

export const getMyCart = () => {
    return {
        type: MY_CART
    }
}

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

export const deleteFromCart = (item) => {
    return {
        type: DELETE_FROM_CART,
        payload: item 
    }
}

export const resetCart = () => {
    return {
        type: RESET_CART
    }
}