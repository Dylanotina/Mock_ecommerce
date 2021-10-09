import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../components/commons/Product";
import { Link } from "react-router-dom";

function Products() {
  const [state, setstate] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get("http://localhost:3001/api/products");
      console.log(response.data.data);
      let data = await response.data.data;
      setstate(data);
    };

    fetchData();
  }, []);

  return (
      <div style={{height:'100%',overflowY:'scroll'}}>
      {state.length === 0 ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : null}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
      {state.map((product) => (
        <Link to={`/product/${product._id}`}>
          <Product {...product} key={product._id} className={'products'} />
        </Link>
      ))}
    </div>
    </div>
  );
}

export default Products;
