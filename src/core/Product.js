import React, { useState, useEffect } from "react";
import Base from "./Base";
import "../styles.css";
import { API } from "../backend";
import Card from "./card";
import { getProducts } from "./helper/coreapicalls";
import { useLocation } from "react-router-dom";

const Product = () => {
  console.log("API IS", API);
  const { state } = useLocation();
  console.log(state);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        if (state == null) {
          setProducts(data);
          return;
        }
        let dataNew = data.filter((item) => item.category._id == state);
        setProducts(dataNew);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    <Base title="Home Page" description="Welcome to the T-shirt store">
      <div className="row text-center">
        <h1 className="text-white">All of products</h1>
        <div className="row">
          {products.map((product, index) => {
            return (
              <div key={index} className="col-4 mb-4">
                <Card product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
};

export default Product;