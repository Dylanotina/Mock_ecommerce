import React from 'react'
import {Card} from 'react-bootstrap'
import '../../styles/Product.css'

function Product(props) {
    return (
        <div>
            <Card bsPrefix={props.className}  key={props._id}>
                <Card.Img variant="top" src={`data:image/jpeg;base64,${props.image}`}></Card.Img>
                <Card.Body style={{color: 'black', textDecoration: 'none', marginTop : '0'}}>
                    <Card.Title style={{ textDecoration: 'none', whiteSpace: 'nowrap'}}>{props.name}</Card.Title>
                    <Card.Text style={{ textDecoration: 'none'}}>{props.description}</Card.Text>
                    <Card.Text style={{ textDecoration: 'none'}}>${props.price}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Product
