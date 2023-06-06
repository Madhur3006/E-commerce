import { MY_CART, ADD_TO_CART, DELETE_FROM_CART, RESET_CART } from "./carttypes";

const initialState = {
    mycart: [],
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case MY_CART: return {
            ...state
        }

        case ADD_TO_CART: return {
            mycart: [...state, action.payload] 
        }

        case DELETE_FROM_CART:
            const updated = state.mycart.filter(item => item!==action.payload)
            return {
                mycart: updated
        }

        case RESET_CART: return {
            mycart: []
        }

        default: return state 
    }
}

export default cartReducer 