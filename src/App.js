import React, { useState } from 'react' 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Products from './components/products'
import Profile from './components/profile'
import Navbar from './components/navbar'
import { AuthProvider } from './components/auth'
import Login from './components/login'
import { RequireAuth } from './components/requireauth'
import { AdminBlock } from './components/adminblock'
import Cart from './components/cart'
import OrderConfirm from './components/orderconfirm'
import AddProduct from './components/addproduct'
import Edit from './components/editproductdetails'
import Update from './components/edit'
import './App.css'
import store from './redux/store'
import { provider } from 'react-redux'

// import Component1 from './components/component1'
// import Component2 from './components/component2'
// import Component3 from './components/component3'

// export const CountContext = React.createContext()

// export const nameContext = React.createContext()

// const initialState = 0 

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'increament': 
//            return state + 1 
//         case 'decreament':
//             return state - 1
//         case 'reset':
//             return initialValue
//         default:
//             return state
//     }
// }

function App() {

  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (item) => {
      setCartItems([...cartItems, item]);// const [count, dispatch] = useReducer(reducer, initialState)
  }
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((_, i) => i!==id)
    setCartItems(updatedCart)
  }

  const resetCart = () => {
    setCartItems([])
  }

  return (
   <>
    <BrowserRouter>
    <AuthProvider>
    <Provider store = {store}>
      <div>
        <Link to = '/'>
          <h1>Capgemini.com</h1>
        </Link>
      </div>
      <Navbar />
      <hr />
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = 'about' element = {<About />} />
        <Route path = 'products' element = {<Products cartItems={cartItems} addToCart={addToCart} />} />
        <Route path = 'profile' element = {<RequireAuth><Profile /></RequireAuth>} />
        <Route path = 'login' element = {<Login />} />
        <Route path = 'cart' element = {<RequireAuth><AdminBlock><Cart cartItems={cartItems} resetCart = {resetCart} removeFromCart = {removeFromCart} /></AdminBlock></RequireAuth>} />
        <Route path = 'orderconfirm' element = {<OrderConfirm />} /> 
        <Route path = 'addproducts' element = {<RequireAuth><AddProduct /></RequireAuth>} />
        <Route path = 'editdelete' element = {<RequireAuth><Edit /></RequireAuth>} />
        <Route path = 'update' element = {<RequireAuth><Update /></RequireAuth>} />
      </Routes>
    </Provider>
    </AuthProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
