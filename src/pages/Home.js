import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Cart from "./Cart";
const Home = () => {
  const [products, setProducts] = useState([])
  const state = useSelector((state) => state);
  useEffect(() => {
    fetch("products.json")
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {
        products?.map((item, idx) => <ProductCard key={idx} product={item}></ProductCard>)
      }
    </div>
  );
};

export default Home;
