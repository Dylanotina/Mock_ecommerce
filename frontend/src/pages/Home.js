import React from "react";
import { Carousel } from "react-bootstrap";
import sneaker2 from "../assets/sneaker2.jpg";
import sneaker3 from "../assets/sneaker3.jpg";
import sneaker4 from "../assets/sneaker4.jpg";
import Product from "../components/commons/Product";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [state, setstate] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get("http://localhost:3001/api/products");
      console.log(response.data.data);
      let data = await response.data.data;

      setstate(data.slice(0, 3));
    };

    fetchData();
  }, []);

  return (
    <div style={{ height: "100%" }}>
      <Carousel style={{ height: "500px" }}>
        <Carousel.Item style={{ height: "500px" }}>
          <img
            className="d-block w-100"
            src={sneaker3}
            alt="First Slide"
            style={{ objectFit: "scale-down" }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "500px" }}>
          <img
            className="d-block w-100"
            src={sneaker4}
            alt="Second slide"
            style={{ objectFit: "scale-down" }}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "500px" }}>
          <img
            className="d-block w-100"
            src={sneaker2}
            alt="Third slide"
            style={{ objectFit: "scale-down" }}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h5 style={{display : 'flex', justifyContent: 'center', alignItems: 'center'}}>Recently Added :</h5>

      <div
        style={{
          border: "1px solid black",
          marginTop: "1vh",
          marginLeft: "10vw",
          width: "80%",
          height: "25vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        
            
        {state.map((product) => (
          <Product
            {...product}
            key={product._id}
            className={"recently-added"}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
