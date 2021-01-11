import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser, updateUserProfile } from "../actions/userActions";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";
import "./ProfileScreen.css";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setAdmin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(detailsUser(userInfo._id));
    } else {
      setName(user.name);
      setEmail(user.email);
      setAdmin(user.isAdmin);
    }
  }, [dispatch, userInfo._id, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch update profile
    if (password !== confirmPassword) {
      alert("La contraseña no coincide.");
    } else {
      dispatch(
        updateUserProfile({ userId: user._id, name, email, isAdmin, password })
      );
    }
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
            {loadingUpdate && <LoadingBox></LoadingBox>}
            {errorUpdate && (
              <MessageBox variant="danger">{errorUpdate}</MessageBox>
            )}
            {successUpdate && (
              <MessageBox variant="primary">
                Peril actualizado correctamente
              </MessageBox>
            )}
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input
                id="name"
                type="text"
                placeholder="Ingresa tu nombre"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo:</label>
              <input
                id="email"
                type="email"
                placeholder="Ingresa tu correo"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="admin">Ventas:</label>
              <input
                id="admin"
                type="text"
                placeholder="Vededor"
                className="form-control"
                value={isAdmin}
                onChange={(e) => setAdmin(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña:</label>
              <input
                id="password"
                type="password"
                placeholder="Ingresa tu contraseña"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirma la Contraseña:</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirma tu contraseña"
                className="form-control"
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label />
              <button className="btn btn-primary" type="submit">
                <i class="fas fa-edit fa-3x"></i>
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
