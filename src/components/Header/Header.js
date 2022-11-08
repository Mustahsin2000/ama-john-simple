import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    return (
        <nav className='header-nav'>
            <img src={logo} alt="" srcset="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/order">Orders</Link>
                <Link to="/map">Map</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                 user?.uid ?
                 <button className='btn-logout' onClick={logOut}>Log Out</button>
                 :   
                  <>
                <Link to="/login">Login</Link>
                <Link to="/signup">sign Up</Link>
                  </>
                }
                <span className='header-mail'>{user?.email}</span>
                
            </div>
        </nav>
    );
};

export default Header;