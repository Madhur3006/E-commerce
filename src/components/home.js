import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'


const Home = () => {
    const navigate = useNavigate()

    const auth = useAuth()

    const handleButton = () => {
        if (auth.user) {
            auth.logout()
        }else{
            navigate('/login')
        }
    }

    return (
       <div>
        <h2>HomePage</h2>
        <button onClick = {handleButton}>{auth.user ? 'logout':'login'}</button>
       </div>
    );
}
 
export default Home;