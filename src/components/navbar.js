import React from 'react';
import { useAuth } from './auth';

import { NavLink, Outlet } from 'react-router-dom'
import { RequireAuth } from './requireauth';

const Navbar = () => {

    const navLinkStyle = ({isActive}) => {
        return {
            fontWeight: isActive ? 'Bold' : 'normal',
            textDecoration: isActive ? 'underlined' : 'none'
        }
    }

    const auth = useAuth()

    return ( 
        <>
            <nav className='primary-nav'>
                <NavLink style = {navLinkStyle} to = '/' > Home </NavLink>
                <NavLink style = {navLinkStyle} to = '/About' > About </NavLink>
                <NavLink style = {navLinkStyle} to = '/Products' > Products </NavLink>
                {auth.user && (<NavLink style = {navLinkStyle} to = '/Profile'> Profile </NavLink>)}
                {!auth.user && (<NavLink style = {navLinkStyle} to = '/login'> Login </NavLink>)}
                {auth.user && auth.user!='admin' && (<NavLink style = {navLinkStyle} to = '/cart'> Cart </NavLink>)}
                {auth.user && auth.user==='admin' && (<NavLink style = {navLinkStyle} to = '/addproducts'> AddProduct </NavLink>)}
                {auth.user && auth.user==='admin' && (<NavLink style = {navLinkStyle} to = '/editdelete'> EditDelete </NavLink>)}
                {/* {auth.user && auth.user==='admin' && (<NavLink style = {navLinkStyle} to = '/update'> Edit </NavLink>)} */}
            </nav>
            <Outlet />
            
        </>
     );
}
 
export default Navbar;