import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Productos from "./components/Productos";
import data from "./data";

import "bootstrap/dist/css/bootstrap.min.css";
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>;

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div class="row center pb-4 pt-4">
        {data.products.map((product) => (
          <Productos key={product._id} product={product}></Productos>
        ))}
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
