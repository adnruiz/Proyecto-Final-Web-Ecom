import "./Productos.css";
import Raiting from "./Rating";
import { Link } from "react-router-dom";

export default function Productos(props) {
  const { product } = props;

  return (
    <div className="col pb-4 pt-3">
      <div key={product._id} className="card align-items-center pb-3 pt-3">
        <Link to={`/product/${product._id}`}>
          <img
            src={product.image}
            className="card-img-top img"
            alt={product.name}
          ></img>
        </Link>
        <div className="card-body">
          <Link to={`/product/${product._id}`}>
            <h5 className="card-title">{product.name}</h5>
          </Link>
          <div className="price">
            <label>Precio:</label>
            <span className="badge badge-secondary">${product.price}</span>
          </div>
          <p className="card-text">{product.description}</p>
          <Raiting
            rating={product.rating}
            numReviews={product.numReviews}
          ></Raiting>
        </div>
      </div>
    </div>
  );
}
