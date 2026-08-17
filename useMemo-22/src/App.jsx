//use memo snippet --->
// import { useMemo } from "react";
// const memoizedValue = useMemo(() => {
//   return someExpensiveCalculation(data);
// }, [data]);

import React, { useMemo, useState } from "react";
const ProductList = () => {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile Phone" },
    { id: 3, name: "Headphones" },
    { id: 4, name: "Keyboard" },
    { id: 5, name: "Mouse" },
  ];
  const [search, setSearch] = useState("");
  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [products, search]);
  return (
    <div>
      {" "}
      <h1>Product List</h1>{" "}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
      />{" "}
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <p key={product.id}>{product.name}</p>
        ))
      ) : (
        <p>No products found.</p>
      )}{" "}
    </div>
  );
};
export default ProductList;


// useMemo -->
// useMemo is a React hook that caches the result of an expensive calculation between re-renders.  It only recomputes the value when its specified dependencies change, optimizing performance by avoiding unnecessary recalculations.