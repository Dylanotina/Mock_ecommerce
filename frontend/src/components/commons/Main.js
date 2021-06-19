import React from 'react'
import {BrowserRouter as Router , Switch, Route } from  'react-router-dom'

// Pages
import Checkout from '../../pages/Checkout'
import Home from '../../pages/Home'
import Login from '../../pages/Login'
import Product from '../../pages/Product'
import Products from '../../pages/Products'
import Register from '../../pages/Register'

// Components 
import Cart from '../cart/Cart'

function Main({cartItems, handleAddToCart, handleRemoveToCart, className}) {



    return (
        <div className={className}>
            <div className="offcanvas offcanvas-end" tabIndex='-1' id='offcanvascart'>
                <Cart addToCart={handleAddToCart} removeFromCart={handleRemoveToCart} cartItems={cartItems} />
            </div>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Home></Home>
                    </Route>

                    <Route path="/products">
                        <Products></Products>
                    </Route>

                    <Route path="/product/:id">
                        <Product addToCart={handleAddToCart}></Product>
                    </Route>

                    <Route path="/login">
                        <Login></Login>
                    </Route>

                    <Route path="/register">
                        <Register></Register>
                    </Route>

                    <Route path="/checkout">
                        <Checkout></Checkout>
                    </Route>
                </Switch>
            </Router>
            
        </div>
    )
}

export default Main
