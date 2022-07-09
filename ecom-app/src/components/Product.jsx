import React from "react";
import { data } from "./Data";

function Product(prop) {
  // const {imageURL,name,price} = prop
  console.log(data);
  return (
    <>
      <div>
        <div className="close"></div>
        <div>
          <img className="product-img" src={data[0].imageURL} alt="product" />
          <h3>{data[0].name}</h3>
          <h5>{data[0].price} </h5>
        </div>
      </div>
    </>
  );
}

export default Product;
