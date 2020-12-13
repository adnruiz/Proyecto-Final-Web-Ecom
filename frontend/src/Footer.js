import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer pb-4 pt-4">
      <div className="containerFooter">
        <div className="row text-center">
          <div className="col-12 col-md">
            <a href="contacto.html" defaultValue="">
              Contacto
            </a>
          </div>
          <div className="col-12 col-md">
            <a href="Info.html">¿Quienes somos?</a>
          </div>
        </div>

        <div className="row text-center">
          <div className="col pt-4">
            <p>Siguenos en nuestras redes sociales</p>
          </div>
        </div>

        <div className="row text-center">
          <div className="col pb-1 pt-4">
            <a href="www.facebook.com">
              <i
                data-toggle="tooltip"
                data-placement="left"
                title="Facebook"
                className="fab fa-facebook-square fa-2x pr-3 pl-3"
              ></i>
            </a>
            <a href="www.twitter.com">
              <i
                data-toggle="tooltip"
                data-placement="bottom"
                title="Twitter"
                className="fab fa-twitter-square fa-2x pr-3 pl-3"
              ></i>
            </a>
            <a href="www.instagram.com">
              <i
                data-toggle="tooltip"
                data-placement="bottom"
                title="Instagram"
                className="fab fa-instagram fa-2x pr-3 pl-3"
              ></i>
            </a>
            <a href="www.youtube.com">
              <i
                data-toggle="tooltip"
                data-placement="right"
                title="Youtube"
                className="fab fa-youtube fa-2x pr-3 pl-3"
              ></i>
            </a>
          </div>
        </div>

        <div className="row text-center pb-2 pt-2">
          <div className="col">
            <img
              className="header_logo"
              src="latte-art.png"
              alt="logotipo"
            ></img>
          </div>
        </div>
        <div className="row text-center pb-2 pt-2">
          <div className="col">
            <p>
              &copy 2020 - Moderat Workshop, México - Reservados a todos los
              derechos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
