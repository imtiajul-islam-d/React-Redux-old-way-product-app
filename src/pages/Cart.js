import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  const state = useSelector((state) => state)
  console.log(state)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {
        state.cart.sort((a, b) => a._id - b._id).map((product, idx) => <ProductCard key={idx} product={product}></ProductCard>)
      }
    </div>
  );
};

export default Cart;
