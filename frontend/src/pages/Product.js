import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Product() {
  const [productInfo, setproductInfo] = useState({});
  const { id } = useParams();
  
  const sizes = Array.apply(null, Array(10)).map((_,i) => i+1).map(val => val +3)

  const checkAvailabilty = (size) => {
      if (productInfo.sizeAvailabilty !== undefined){
          return productInfo.sizeAvailabilty.includes(size)
      }
  }

  useEffect(() => {
    const fetchProduct = async () => {
      let response = await axios.get(`http://localhost:3001/api/product/${id}`);
      let data = await response.data.data;
      console.log(data);
      setproductInfo(data);
    };
    fetchProduct();
  }, [id]);
  return (
    <div
      className="productInfo-container"
      style={{ display: "flex", flexDirection: "row", height: "100%" }}
    >
      <div className='image-container' style={{ width: "100%", height: "100%", marginLeft: "0.75rem" }}>
        <img src={`data:image/jpeg;base64,${productInfo.image}`} alt="Test" style={{width: '80%'}}></img>
      </div>
      <div className='text-container' style={{ width: "50%", height: "100%", marginRight: "0.75rem" }}>
        <h3>{productInfo.name}</h3>
        <p>{productInfo.description}</p>
        <h5>{productInfo.price}$</h5>
        <p>Sizes:</p>
        <div className="sizes" style={{ display : 'grid', gridTemplateColumns : '1fr 1fr 1fr', gap:'7px'}}>
            {sizes.map( size => (<button disabled={checkAvailabilty(size)}>US {size}</button>))}
            </div>
        <div className='addToCart' style={{display : 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center',marginTop: '10rem', marginLeft :'3rem', width : '80%', border : '1px solid black', borderRadius : '10px'}}>
            Add to cart
        </div>
      </div>
    </div>
  );
}

export default Product;
