import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../actions/userActions";
import "./Header.css";

export default function Header() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  const productsHandler = () => {};

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div>
        <Link className="navbar-brand" to="/">
          <img className="header_logo" src="latte-art.png" alt="logotipo"></img>
          Moderat Workshop
        </Link>
      </div>
      <button
        className="navbar-toggler btn btn-outline-primary"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fa fa-navicon"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <input
          className="form-control mr-sm-4"
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
          <i className="fas fa-search"></i>
        </button>
        <ul className="navbar-nav">
          <li className="nav-item">
            {userInfo ? (
              <div class="dropdown">
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <Link to="#">{userInfo.name}</Link>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <ul className="dropdown-item">
                    <li>
                      <Link to="#signout" onClick={signoutHandler}>
                        Cerrar sesion <i class="fas fa-sign-out-alt"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/profile">Perfil</Link>
                    </li>
                    <li>
                      <Link to="/orderhistory">Historial de ordenes</Link>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <Link className="nav-link" to="/signin">
                Iniciar Sesion
              </Link>
            )}
          </li>
          <li className="nav-item">
            {userInfo && userInfo.isAdmin && (
              <div class="dropdown">
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <Link to="#admin">Admin</Link>
                </button>

                <div
                  class="dropdown-menu"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <ul className="dropdown-item">
                    <li>
                      <Link to="/productlist">Productos</Link>
                    </li>
                    <li>
                      <Link to="/orderlist">Ordenes</Link>
                    </li>
                    <li>
                      <Link to="/userlist">Usuarios</Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/cart">
              Carrito<i className="fas fa-shopping-cart"></i>
              {cartItems.length > 0 && (
                <span className="badge badge-primary">{cartItems.length}</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
} /*

                */
