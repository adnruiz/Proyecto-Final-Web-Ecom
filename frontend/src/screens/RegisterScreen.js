import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
import "./SigninScreen.css";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function RegisterScreen(props) {
  //react hook
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/signin";

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, error, loading } = userRegister;

  const submitHandler = (e) => {
    e.preventDefault();
    //Signin action
    if (password !== confirmPassword) {
      alert("La contraseña no coincide en la confirmacion");
    } else {
      dispatch(register(name, email, password));
    }
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Registro</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div className="form-group">
          <label htmlFor="name">Nombre(s): </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Ingresa tu nombre"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo: </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Correo electronico"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña: </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Ingresa tu contraseña"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirme la contraseña: </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirma tu contraseña"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <button type="submit" className="btn btn-primary btn-block">
            Registrarme <i class="far fa-save"></i>
          </button>
        </div>
        <div>
          <label />
          <div>
            ¿Ya tienes cuenta? <Link to="/signin">Inicia Sesion</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
