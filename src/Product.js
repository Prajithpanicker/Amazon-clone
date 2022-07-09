import React from "react";
import "./Product.css";



function product({id, title, image, price, rating }) {
 


   
  return (
    <div className="product">
      <img
        src={image}
        alt=""
      />
      <div className="product_info">
        <p>{title}</p>
        <div className="product_rating">
          {Array(rating)
          .fill()
          .map((_, i)=>(
          <p>⭐</p>
          ))}
        </div>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
      </div>
      <button >Add to cart</button>
    
    </div>
  );
}

export default product;
