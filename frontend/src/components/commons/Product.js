import React from 'react'
import {Card} from 'react-bootstrap'

function Product(props) {
    return (
        <div>
            <Card style={{width : 'auto ', height : 'auto', marginBottom : '1rem', marginLeft : '1rem', border: 'none' }} key={props._id}>
                <Card.Img variant="top" src={`data:image/jpeg;base64,${props.image}`} style={{ width: '20rem', height: '20rem', objectFit:'contain'}}></Card.Img>
                <Card.Body style={{color: 'black', textDecoration: 'none'}}>
                    <Card.Title style={{ textDecoration: 'none'}}>{props.name}</Card.Title>
                    <Card.Text style={{ textDecoration: 'none'}}>{props.description}</Card.Text>
                    <Card.Text style={{ textDecoration: 'none'}}>${props.price}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Product
