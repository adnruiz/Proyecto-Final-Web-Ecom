import React from "react";
import "./Productos.css";
import Raiting from "./Rating";

export default function Productos(props) {
  const { product } = props;
  return (
    <div className="col pb-4 pt-3">
      <div key={product._id} className="card align-items-center pb-3 pt-3">
        <a href={`/product/${product._id}`}>
          <img
            src={product.image}
            className="card-img-top img"
            alt={product.name}
          ></img>
        </a>
        <div className="card-body">
          <a href={`/product/${product._id}`}>
            <h5 className="card-title">{product.name}</h5>
          </a>
          <div className="price">
            <label>Precio:</label>
            <span className="badge badge-secondary">${product.price}</span>
          </div>
          <p className="card-text">{product.description}</p>
          <Raiting
            rating={product.rating}
            numReviews={product.numReviews}
          ></Raiting>
          <button href="#" className="btn btn-primary btn-block btn-carrito">
            <i className="fas fa-shopping-cart "></i>
          </button>
        </div>
      </div>
    </div>
  );
}
