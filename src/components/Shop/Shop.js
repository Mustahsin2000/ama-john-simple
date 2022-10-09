import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
   const products = useLoaderData();
    const [cart,setcart] = useState([]);//cart a add korar jonno
    
    const clearCart = () =>{
        setcart([]);
        deleteShoppingCart();
    }

    //load korar por jeno local storage theke information chole ase thake data
    useEffect(()=>{
        const storedCart = getStoredCart(); //object hishebe dey
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product=>product.id===id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setcart(savedCart);
    },[products])

    const handleADDtoCart = (selectedProduct) =>{
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product=>product.id===selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart,selectedProduct];
        }
        else{
            const rest =cart.filter(product=>product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest,exists];
        }
        // cart.push(product)
        ////cart a add korar jonno
        setcart(newCart);
        addToDb(selectedProduct.id)
    }

    return (
        <div className='Shop'>
            <div className="products-container">
              {
                products.map(product=><Product product={product} key={product.id} handleADDtoCart={handleADDtoCart} ></Product>)
              }

            </div>
            <div className="cart-container">
              <Cart clearCart={clearCart} cart={cart}>
                <Link to="/order">
                    <button className='review'>Review Order</button>
                </Link>
              </Cart>
            </div>
        </div>
    );
};

export default Shop;