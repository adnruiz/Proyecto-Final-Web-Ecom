import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { PRODUCT_CREATE_RESET } from "../constants/productConstants";

export default function ProductCreateScreen(props) {
  //const productId = props.match.params.id;
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading,
    error,
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
      createProduct({
        name,
        category,
        image,
        price,
        countInStock,
        brand,
        description,
      })
    );
  };

  useEffect(() => {
    //add product screen
    if (successCreate) {
      dispatch({ type: PRODUCT_CREATE_RESET });
      props.history.push(`/`);
    }
  }, [createdProduct, props.history, dispatch, successCreate]);

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Agregar Productos</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            type="text"
            placeholder="Ingrese el nombre"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="price">Precio</label>
          <input
            id="price"
            type="text"
            placeholder="Ingrese el precio"
            className="form-control"
            onChange={(e) => setPrice(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="image">Imagen</label>
          <input
            id="image"
            type="text"
            placeholder="Ingresa URL de la imagen"
            className="form-control"
            onChange={(e) => setImage(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="category">Categoria</label>
          <input
            id="category"
            type="text"
            placeholder="Ingresar categoria"
            className="form-control"
            onChange={(e) => setCategory(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="brand">Marca</label>
          <input
            id="brand"
            type="text"
            placeholder="Ingresa la marca"
            className="form-control"
            onChange={(e) => setBrand(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="countInStock">Stock</label>
          <input
            id="countInStock"
            type="text"
            placeholder="Ingresa el stock"
            className="form-control"
            onChange={(e) => setCountInStock(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripcion</label>
          <textarea
            id="description"
            rows="3"
            type="text"
            placeholder="Ingrese una descripcion"
            className="form-control"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label></label>
          <button className="btn btn-primary" type="submit">
            <i class="fas fa-save fa-2x"></i>
          </button>
        </div>
        {loadingCreate && <LoadingBox></LoadingBox>}
        {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      </form>
    </div>
  );
}
