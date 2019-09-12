import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({ item, quantity }) => {
    console.log("sss", item)
    const { imageUrl, price, name } = item;
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt={name} />
            <div className='item-details'>
                <span className="name">{name}</span>
                <span className='price'>{quantity} * ${price}</span>
            </div>
        </div>
    )
};

export default CartItem;