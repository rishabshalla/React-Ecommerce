import React from "react";
import { useState } from "react";
import { data } from "./Data";
import Product from "./Product";
// import Product from "./Product";

function Home() {
  console.log(data);
  return (
    <>
      <div className="product-list">
        {data.map((product) => {
          return (
            <div className="product">
              <img
                className="product-img"
                src={product.imageURL}
                alt="product"
              />
              <h3>{product.name}</h3>
              <h5>{product.price} </h5>
              <button> Add to Cart</button>
              <button> Add to favorites</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
