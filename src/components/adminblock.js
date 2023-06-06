import React from 'react';
import { useAuth } from  './auth'
import { Navigate } from 'react-router-dom'

export const AdminBlock = ({children}) => {

    const auth = useAuth()

    if (auth.user=='admin'){
        return <Navigate to='/login' />
    }

    return children 
}
 
