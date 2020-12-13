import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Productos from "./Productos";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Productos></Productos>
      <Footer></Footer>
    </div>
  );
}

export default App;
