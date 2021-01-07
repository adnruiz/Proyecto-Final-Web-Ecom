import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsOrder } from "../actions/orderActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function OrderScreen(props) {
  const orderId = props.match.params.id;
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsOrder(orderId));
  }, [dispatch, orderId]);

  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <h1>Orden {order._id}</h1>
      <div className="row top">
        <div className="col-6">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Envio</h2>
                <p>
                  <strong>Nombre:</strong>
                  {order.shippingAddress.fullName}
                  <br />
                  <strong>Direccion:</strong>
                  {order.shippingAddress.address},{order.shippingAddress.city},
                  {order.shippingAddress.state},
                  {order.shippingAddress.postalCode}
                  <br />
                </p>
                {order.isDelivered ? (
                  <MessageBox variant="success">
                    Entregado: {order.deliveredAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">No ha sido entregado</MessageBox>
                )}
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Pago</h2>
                <p>
                  <strong>Metodo:</strong>
                  {order.paymentMethod}
                </p>
                {order.isDelivered ? (
                  <MessageBox variant="success">
                    Pagado: {order.paidAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">No ha sido pagado</MessageBox>
                )}
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Productos</h2>
                <div>
                  {order.orderItems.map((item) => (
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
                  <div>${order.itemPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Envio</div>
                  <div>${order.shippingPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong>Total</strong>
                  </div>
                  <div>
                    <span className="badge badge-success">
                      ${order.totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
