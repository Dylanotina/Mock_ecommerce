import React from 'react'
import {Card} from 'react-bootstrap'

function Product(props) {
    return (
        <div>
            <Card style={{width : 'auto ', height : 'auto', marginBottom : '1rem', marginLeft : '1rem', border: 'none' }} key={props._id}>
                <Card.Img variant="top" src={`data:image/jpeg;base64,${props.image}`} style={{ width: '10rem', height: '10rem'}}></Card.Img>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    <Card.Text>{props.price}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Product
