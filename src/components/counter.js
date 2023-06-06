import React, { useReducer } from 'react';

const initialValue = 0 

const reducer = (state, action) => {
    switch (action.type) {
        case 'increament': 
           return state + 1 
        case 'decreament':
            return state - 1
        case 'reset':
            return initialValue
        default:
            return state
    }
}

const Counter = () => {

    const [count, dispatch] = useReducer(reducer, initialValue)
    return ( 
        <>
          <div>
            <div>
                {count}
                <button onClick = {() => dispatch('increament')}>increment</button>
            </div>
          </div>
        </>
     );
}
 
export default Counter;