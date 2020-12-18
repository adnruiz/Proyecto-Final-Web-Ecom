import React, { useState } from "react";
import CheckoutSteps from "../components/CheckoutSteps";
import { useDispatch, useSelector } from "react-redux";
import "./ShippingAdressScreen.css";
import { saveShippingAddress } from "../actions/cartActions";

export default function ShippingAdressScreen(props) {
  //const { direction } = props;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!userInfo) {
    props.history.push("/signin");
  }

  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [state, setState] = useState(shippingAddress.state);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch save address action
    dispatch(
      saveShippingAddress({ fullName, address, city, state, postalCode })
    );
    props.history.push("/payment");
  };
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Direccion de envio</h1>
        </div>
        <div className="form-group">
          <label htmlFor="fullname">Nombre completo:</label>
          <input
            type="text"
            id="fullName"
            placeholder="Ingresa tu nombre completo"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="address">Direccion:</label>
          <input
            type="text"
            id="address"
            placeholder="Ingresa tu direccion"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="city">Localidad/Municipio:</label>
          <input
            type="text"
            id="city"
            placeholder="Ingresa tu ciudad"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="state">Estado:</label>
          <input
            type="text"
            id="state"
            placeholder="Ingresa el estado"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="postalCode">Codigo Postal:</label>
          <input
            type="text"
            id="postalCode"
            placeholder="Ingresa tu codigo postal"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label />

          <button className="btn btn-primary btn-block">Continuar</button>
        </div>
      </form>
    </div>
  );
}
//En el boton falta agregar action para que guarde la info en la collection
