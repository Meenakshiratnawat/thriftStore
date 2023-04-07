import React, { useState, useEffect } from "react";
import Base from "./Base";
import "../styles.css";
import { API } from "../backend";
import Card from "./card";
import { getProducts } from "./helper/coreapicalls";
import { loadCart } from "./helper/CartHelper";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const loadAllProducts = () => {
    return (
      <div className="col-lg-6 col-md-8 col-sm-10 mx-auto">
        <h2 className="mb-4">Cart Items</h2>
        <div className="row">
          {products.map((product, index) => (
            <Card
              key={index}
              product={product}
              removeFromCart={true}
              addtoCart={false}
              setReload={setReload}
              reload={reload}
            />
          ))}
        </div>
      </div>
    );
  };

  const loadCheckout = () => {
    return (
      <div className="col-lg-6 col-md-8 col-sm-10 mx-auto">
        <h2 className="mb-4">Checkout</h2>
        <div className="card p-4">
          <h4>Order Summary</h4>
          <hr />
          <p>Total items: {products.length}</p>
          <p>Total price: ${products.reduce((a, b) => a + b.price, 0)}</p>
          <button className="btn btn-primary">Place Order</button>
        </div>
      </div>
    );
  };

  return (
    <Base title="Cart Page" description="Ready to checkout">
      <div className="container-fluid">
        <div className="row">
          {loadAllProducts()}
          {products.length === 0 && (
            <div className="col-lg-6 col-md-8 col-sm-10 mx-auto">
              <div className="alert alert-info mt-4">No items added</div>
            </div>
          )}
          {loadCheckout()}
        </div>
      </div>
    </Base>
  );
};

export default Cart;
