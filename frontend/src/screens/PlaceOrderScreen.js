import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createOrder } from "../actions/orderActions";
import CheckoutSteps from "../components/CheckoutSteps";
import { ORDER_CREATE_RESET } from "../constants/orderConstants";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function PlaceOrderScreen(props) {
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    props.history.push("/payment");
  }

  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;

  //Funcion para obtener pago total
  const toPrice = (num) => Number(num.toFixed(2));
  cart.itemPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.shippingPrice = cart.itemPrice > 1000 ? toPrice(0) : toPrice(150);
  cart.totalPrice = cart.itemPrice + cart.shippingPrice;

  const dispatch = useDispatch();

  const placeOrderHandler = () => {
    //place order actions
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
  };

  useEffect(() => {
    if (success) {
      props.history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]);

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="row top">
        <div className="col-6">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Envio</h2>
                <p>
                  <strong>Nombre:</strong>
                  {cart.shippingAddress.fullName}
                  <br />
                  <strong>Direccion:</strong>
                  {cart.shippingAddress.address},{cart.shippingAddress.city},
                  {cart.shippingAddress.state},{cart.shippingAddress.postalCode}
                  <br />
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Pago</h2>
                <p>
                  <strong>Metodo:</strong>
                  {cart.paymentMethod}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Productos</h2>
                <div>
                  {cart.cartItems.map((item) => (
                    <li key={item.product} className="card card-item p-4">
                      <div className="row">
                        <div className="pr-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="img small"
                          ></img>
                        </div>
                        <div className="min-30">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>
                      </div>
                      <div className="row ">
                        <div>
                          Precio(Unidad):
                          <span className="badge badge-info w-10">
                            {item.qty} x ${item.price} = $
                            {item.qty * item.price}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="card card-body">
            <ul>
              <li>
                <strong>Orden final</strong>
              </li>
              <li>
                <div className="row">
                  <div>Productos</div>
                  <div>${cart.itemPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Envio</div>
                  <div>${cart.shippingPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong>Total</strong>
                  </div>
                  <div>
                    <span className="badge badge-success">
                      ${cart.totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <button
                  className="btn btn-primary btn-block"
                  type="button"
                  onClick={placeOrderHandler}
                  disabled={cart.cartItems.length === 0}
                >
                  Finalizar pedido
                </button>
              </li>
              {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant="danger">{error}</MessageBox>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
