import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser } from "../actions/userActions";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";
import "./ProfileScreen.css";

export default function ProfileScreen() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsUser(userInfo._id));
  }, [dispatch, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch update profile
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Perfil</h1>
        </div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input
                id="name"
                type="text"
                placeholder="Ingresa tu nombre"
                className="form-control"
                value={user.name}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo:</label>
              <input
                id="email"
                type="email"
                placeholder="Ingresa tu correo"
                className="form-control"
                value={user.email}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="admin">Ventas:</label>
              <input
                id="admin"
                type="text"
                placeholder="Vededor"
                className="form-control"
                value={user.isAdmin}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña:</label>
              <input
                id="password"
                type="password"
                placeholder="Ingresa tu contraseña"
                className="form-control"
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirma la Contraseña:</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirma tu contraseña"
                className="form-control"
              ></input>
            </div>
            <div className="form-group">
              <label />
              <button className="btn btn-primary" type="submit">
                Modificar
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
