import React, { useContext } from 'react';
import { CountContext, nameContext } from '../App';

const Component1 = () => {

    const countContext = useContext(CountContext)
    const name = useContext(nameContext)
    return ( 
        <div>
            {name}
            <button onClick = {() => countContext.countDispatch('increment')}>Increament</button>
            <button onClick = {() => countContext.countDispatch('decrement')}>Decreament</button>
            <button onClick = {() => countContext.countDispatch('reset')}>Reset</button>
        </div>
     );
}
 
export default Component1;