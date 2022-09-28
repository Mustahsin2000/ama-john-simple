import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name,img,seller,ratings,price} = props.product;
    const {handleADDtoCart} = props; 
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p>price:{price}</p>
            <p><small>Seller:{seller}</small></p>
            <p><small>Ratings:{ratings}</small></p>
            </div>
            <button onClick={()=>handleADDtoCart(props.product)} className='button-cart'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;