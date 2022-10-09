import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ReviewItem.css'
const ReviewItem = ({product,handleRemoveitem}) => {
    const {name,price,quantity,img,shipping,id} = product;
    return (
        <div className='review-item'>
            <div>
                <img className='review-img' src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details-item">
                     <p>{name}</p>
                     <p>price:{price}</p>
                     <p>quantity:{quantity}</p>
                     <p>Shipping:{shipping}</p>
                </div>
                <div className="delete-container">
                    <button className='button-delete'>
                        <FontAwesomeIcon onClick={()=>handleRemoveitem(id)} className='delete-item' icon={faTrash}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;