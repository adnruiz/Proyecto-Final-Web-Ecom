import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailsProduct } from "../actions/productActions";
import Rating from "../components/Rating";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import "./ProductScreen.css";

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  //redirect to add cart
  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
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
                        <span className="badge badge-danger">
                          No disponible
                        </span>
                      )}
                    </div>
                  </li>
                  {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Cantidad:</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li className="row compras">
                        <button
                          onClick={addToCartHandler}
                          className="btn btn-primary btn-block btn-carrito"
                        >
                          <i className="fas fa-shopping-cart fa-2x"></i>
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
