import React from "react";
import CartItem from "./CartItem";

function Cart({ addToCart, removeFromCart, cartItems }) {
  return (
    <div>
      <h2>Your shopping Cart</h2>
      {cartItems.length === 0 ? <p>Your shopping cart is empty!</p> : null}
      {cartItems.map((item) => (
        <CartItem item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
      ))}
      <h3>Total: ${cartItems.reduce((ack, item )=> (ack +item.price * item.amount), 0)} </h3>
    </div>
  );
}

export default Cart;
