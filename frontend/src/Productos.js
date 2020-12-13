import React from "react";
import data from "./data";
import "./Productos.css";

export default function Productos() {
  return (
    <div class="row center pb-4 pt-4">
      {data.products.map((product) => (
        <div class="col pb-4 pt-3">
          <div key={product._id} class="card align-items-center pb-3 pt-3">
            <a href={`/product/${product._id}`}>
              <img
                src={product.image}
                class="card-img-top img"
                alt={product.name}
              ></img>
            </a>
            <div class="card-body">
              <a href={`/product/${product._id}`}>
                <h5 class="card-title">{product.name}</h5>
              </a>
              <div class="raiting">
                <span>
                  <i class="fa fa-star"></i>
                </span>
                <span>
                  <i class="fa fa-star"></i>
                </span>
                <span>
                  <i class="fa fa-star-o"></i>
                </span>
              </div>
              <div class="price">
                <label>Precio:</label>
                <span class="badge badge-secondary">${product.price}</span>
              </div>
              <span class="badge badge-success">Disponible</span>
              <p class="card-text">Mochila sencilla </p>
              <button href="#" class="btn btn-primary">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
