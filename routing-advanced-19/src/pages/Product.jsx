import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="flex justify-center gap-10 py-4 bg-red-600 ">
        <Link className="text-xl font-semibold" to="/product/men">
          Men
        </Link>
        <Link className="text-xl font-semibold" to="/product/women">
          WoMen
        </Link>
      </div>
      <h1>Product page</h1>
    </div>
  );
};

export default Product;
