import React from "react";
import data from '../data';
import Productos from '../components/Productos';

export default function HomeScreen() {
  return (
    <div class="row center pb-4 pt-4">
      {data.products.map((product) => (
        <Productos key={product._id} product={product}></Productos>
      ))}
    </div>
  );
}
