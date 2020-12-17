import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userActions";
import "./SigninScreen.css";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function SigninScreen(props) {
  //react hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, error, loading } = userSignin;

  const submitHandler = (e) => {
    e.preventDefault();
    //Signin action
    dispatch(signin(email, password));
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
          <h1>Inicia Sesion</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Correo: </label>
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
        <div>
          <button type="submit" className="btn btn-primary btn-block">
            Entrar <i class="fas fa-sign-in-alt"></i>
          </button>
        </div>
        <div>
          <label />
          <div>
            ¿Aún no tienes cuenta?{" "}
            <Link to="/register">Crea tu cuanta ahora!</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
