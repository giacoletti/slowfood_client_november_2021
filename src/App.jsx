import React, { useState, useEffect } from "react";
import Products from "./modules/Products";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Products.index().then((data) => {
      setProducts(data);
    });
  }, []);

  const productsList = products.map((product) => {
    return (
      <div key={products.id}>
        {product.name} - {`${product.price}`}{" "}
        <button data-cy="button_select">Add to Order</button>
      </div>
    );
  });

  return (
    <>
      <h1>Slowfood</h1>
      <div data-cy="product-list">{productsList}</div>
    </>
  );
};

export default App;
