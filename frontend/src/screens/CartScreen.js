import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";
import MessageBox from "../components/MessageBox";
import "./CartScreen.css";

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };

  return (
    <div className="row top prod pl-3">
      <h1>Carrito de compras</h1>
      <div className="col-12 card align-items-center ">
        {cartItems.length === 0 ? (
          <MessageBox>
            Carrito vacio. <Link to="/">Observa nuestros productos</Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.product} className="card card-item p-4">
                <div className="row">
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img small"
                    ></img>
                  </div>
                  <div className="min-30">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div className="pr-3">
                    <select
                      className="bg-light text-dark"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="pr-3 ">
                    <span className="badge badge-info w-10">${item.price}</span>
                  </div>
                  <div>
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i class="fas fa-trash-alt "></i>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-12 ">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </h2>
            </li>
            <li>
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={checkoutHandler}
                disabled={cartItems.length === 0}
              >
                Realizar Compra
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
