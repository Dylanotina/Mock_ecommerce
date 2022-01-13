import React from 'react'
import '../../styles/CartItem.css'

function CartItem({ item, addToCart, removeFromCart}) {
    return (
        <div className='cart-item'>
            <div className='item-image'>
                <img alt="item" src={`data:image/jpeg;base64,${item.image}`}></img> 
            </div>
            <h2>{item.name}</h2>
            <p>Price:${item.price}</p>
            <p>Total:${item.price * item.amount}</p>
            <button onClick={() => removeFromCart(item.id)}> - </button>
            <p>{item.amount}</p>
            <button onClick={() => addToCart(item)}> + </button>
        </div>
    )
}

export default CartItem
