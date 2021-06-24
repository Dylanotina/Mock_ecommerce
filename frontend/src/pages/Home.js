import React from 'react'
import {Carousel} from 'react-bootstrap'
import sneaker2 from '../assets/sneaker2.jpg'
import sneaker3 from '../assets/sneaker3.jpg'
import sneaker4 from '../assets/sneaker4.jpg'


function Home() {
    return (
        <div style={{height: '100%'}}>
            <Carousel>
                <Carousel.Item style={{height : '600px'}}>
                    <img
                    className="d-block w-100"
                    src={sneaker3}
                    alt="First Slide"
                    style={{objectFit: 'scale-down'}}
                   
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  style={{height : '600px'}}>
                    <img
                    className="d-block w-100"
                    src={sneaker4}
                    alt="Second slide"
                    style={{objectFit: 'scale-down'}}
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  style={{height : '600px'}}>
                    <img
                    className="d-block w-100"
                    src={sneaker2}
                    alt="Third slide"
                    style={{objectFit: 'scale-down'}}
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item> 
            </Carousel>
            <div style={{border: '1px solid black', marginTop:'2vh', marginLeft:'10vw',width: '80%',display : 'flex' , justifyContent:'center'}}>
                Recently Added :
            </div>

        </div>
    )
}

export default Home