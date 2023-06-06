import React, { useContext } from 'react';
import { CountContext } from '../App';

const Component3 = () => {

    const countContext = useContext(CountContext)
    return ( 
        <>
            <button onClick = {() => countContext.countDispatch('increament')}>increment</button>
            <button onClick = {() => countContext.countDispatch('decreament')}>decrement</button>
            <button onClick = {() => countContext.countDispatch('reset')}>Reset</button>
        </>
     );
}
 
export default Component3;
