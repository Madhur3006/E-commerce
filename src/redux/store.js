import {createStore, applyMiddleware, combineReducers} from 'redux'
import productReducer from './Products/Productsreducer'
import cartReducer from './cart/cartreducer'
import thunk from 'thunk_redux'

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer 
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store 

