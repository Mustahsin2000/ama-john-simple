import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setproduct] = useState([]);
    const [cart,setcart] = useState([]);//cart a add korar jonno
    useEffect(()=>{
      fetch('products.json')
      .then(res=>res.json())
      .then(data=>setproduct(data))
    }
    ,[])

    const handleADDtoCart = (product) =>{
        console.log(product);
        // cart.push(product)
        ////cart a add korar jonno
        const newCart = [...cart,product];
        setcart(newCart);
    }

    return (
        <div className='Shop'>
            <div className="products-container">
              {
                products.map(product=><Product product={product} key={product.id} handleADDtoCart={handleADDtoCart} ></Product>)
              }

            </div>
            <div className="cart-container">
              <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;