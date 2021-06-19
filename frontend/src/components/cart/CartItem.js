import React from 'react'

function CartItem({ item, addToCart, removeFromCart}) {
    return (
        <div>
            <h2>{item.title}</h2>
            <p>Price:${item.price}</p>
            <p>Total:${item.price * item.amount}</p>
            <button onClick={() => removeFromCart(item.id)}> - </button>
            <p>{item.amount}</p>
            <button onClick={() => addToCart(item)}> + </button>
        </div>
    )
}

export default CartItem
