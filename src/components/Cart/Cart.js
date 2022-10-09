import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart,clearCart,children} = props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    //cart theke product gula loop korbo er por prottek product er price,shipping,tax niye nibo gula niye nibo )
    for(const product of cart){ 
        quantity = quantity+product.quantity;
        total = total+product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    //Tax er jonno:
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total+shipping+parseFloat(tax);
    return (
        <div className='cart'>
           <h4 className='cart-header'>Order Summery</h4>
           <p>Selected Items: {quantity}</p> 
           <p>Total Price:${total}</p>
           <p>Total Shipping:${shipping}</p>
           <p>tax:{tax}</p>
           <h4>Grand Total:{grandTotal.toFixed(2)}</h4>
           <button className='clearCart' onClick={clearCart}>Clear Cart</button>
           {children}
        </div>
    );
};

export default Cart;