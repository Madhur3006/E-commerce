import React, { useContext } from 'react';
import { CountContext } from '../App';

const Component2 = () => {

    const countContext = useContext(CountContext)
    return ( 
        <div>
            <button onClick = {() => countContext.countDispatch('increment')}>Increament</button>
            <button onClick = {() => countContext.countDispatch('decrement')}>Decreament</button>
            <button onClick = {() => countContext.countDispatch('reset')}>Reset</button>
        </div>
     );
}
 
export default Component2;