import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div>
        <a className="navbar-brand" href="/">
          <img className="header_logo" src="latte-art.png" alt="logotipo"></img>
          Moderat Workshop
        </a>
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
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
          <i className="fas fa-search"></i>
        </button>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/cart">
              Carrito<i className="fas fa-shopping-cart"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/signin">
              Iniciar Sesion
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/prime">
              Cuenta Prime
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
