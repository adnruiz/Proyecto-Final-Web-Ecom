import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SigninScreen.css";

export default function SigninScreen() {
  //react hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    //Signin action
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Inicia Sesion</h1>
        </div>
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
