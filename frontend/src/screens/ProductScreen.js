import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import data from "../data";
import "./ProductScreen.css";

export default function ProductScreen(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  if (!product) {
    return <div>Este producto no existe!!</div>;
  }
  return (
    <div>
      <div className="col-1">
        <br></br>
        <Link to="/">
          <i class="fas fa-arrow-circle-left fa-3x"></i>
        </Link>
      </div>
      <div className="row top">
        <div className="col-4 imgprod">
          <h1 className="text-center">{product.name}</h1>
          <img
            src={product.image}
            alt={product.name}
            class="img-thumbnail center"
          ></img>
        </div>
        <div className="col-3">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">
                  {product.name} Marca: {product.brand}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>Precio: ${product.price}</tr>
              <tr>
                Descripción: <p>{product.description}</p>
              </tr>
              <tr>
                <td className="rating">
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  ></Rating>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-3">
          <div class="card card-body border-primary mb-3">
            <ul>
              <li className="row">
                <div>Precio: </div>
                <div className="price">${product.price}</div>
              </li>
              <li className="row">
                <div>Disponibilidad: </div>
                <div>
                  {product.countInStock > 0 ? (
                    <span className="badge badge-success">En stock</span>
                  ) : (
                    <span className="badge badge-danger">No disponible</span>
                  )}
                </div>
              </li>
              <li className="row compras">
                <button className="btn btn-primary btn-block btn-carrito">
                  <i className="fas fa-shopping-cart fa-2x"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
