import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'

function Header(props) {
    return (
        <div className={props.className}>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>MockNike</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="">Login</Nav.Link>
                    <Nav.Link href="">Categories</Nav.Link>
                    <Nav.Link href="">All products</Nav.Link>
                    <Nav.Link href="">Cart</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header
