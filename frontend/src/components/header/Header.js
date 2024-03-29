import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import CartIcon from '../commons/CartIcon'

function Header(props) {
    return (
        <div className={props.className}>
            <Navbar bg="dark" variant="dark" style={{height: '100%'}}>
                <Nav.Link href="/"><Navbar.Brand>MockNike</Navbar.Brand></Nav.Link>
                <Nav className="mr-auto">
                    <Nav.Link  href="/login">Login</Nav.Link>
                    <Nav.Link href="">Categories</Nav.Link>
                    <Nav.Link href="/products">All products</Nav.Link>
                    <Nav.Link href="#offcanvascart" data-bs-toggle='offcanvas'><CartIcon cartsize={props.cartsize}/></Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header
