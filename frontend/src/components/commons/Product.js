import React from 'react'
import {Card} from 'react-bootstrap'

function Product(props) {
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={props.image}></Card.Img>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    <Card.Text>{props.price}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Product
