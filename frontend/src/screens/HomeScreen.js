import React, { useEffect, useState } from "react";
import axios from "axios";
import Productos from "../components/Productos";

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div class="row center pb-4 pt-4">
      {products.map((product) => (
        <Productos key={product._id} product={product}></Productos>
      ))}
    </div>
  );
}
