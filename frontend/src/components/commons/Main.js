import React from 'react'
import {BrowserRouter as Router , Switch, Route } from  'react-router-dom'
import Checkout from '../../pages/Checkout'
import Home from '../../pages/Home'
import Login from '../../pages/Login'
import Product from '../../pages/Product'
import Products from '../../pages/Products'
import Register from '../../pages/Register'

function Main(props) {
    return (
        <div className={props.className}>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Home></Home>
                    </Route>

                    <Route path="/products" >
                        <Products></Products>
                    </Route>

                    <Route path="/product" >
                        <Product></Product>
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
