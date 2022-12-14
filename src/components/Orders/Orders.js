import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const {initialCart} = useLoaderData();
    const [cart,setcart] = useState(initialCart);

    const handleRemoveitem = (id) =>{
        const remaining = cart.filter(product=>product._id !== id);
        setcart(remaining);
        removeFromDb(id);
    }
    const clearCart = () =>{
        setcart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shops'>
          <div className='Shop'>
          <div className="orders-container">
              {
                 cart.map(product=><ReviewItem key={product._id} product={product} handleRemoveitem={handleRemoveitem}></ReviewItem>)
              }
              {
                cart.length === 0 && <h2>No Items For Review.Please <Link to='/'>Shop More</Link></h2>
              }
            </div>
            <div className="cart-container">
               <Cart clearCart={clearCart} cart={cart}>
                <Link to='/shipping'>
                  <button className='shipping'>proceed shipping</button>
                </Link>
               </Cart>
            </div>
          </div>
        </div>
    );
};

export default Orders;