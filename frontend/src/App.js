import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

import "bootstrap/dist/css/bootstrap.min.css";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Route path="/cart/:id?" component={CartScreen}></Route>
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/signin" component={SigninScreen}></Route>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
