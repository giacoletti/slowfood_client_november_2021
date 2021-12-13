import React, { useState, useEffect } from "react";
import Products from "./modules/Products";
import Orders from "./modules/Orders";
import OrderDetails from "./components/OrderDetails";
import ProductsListItem from "./components/ProductsListItem";
import { Container, List, Divider } from '@mui/material';

const App = () => {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState();
  const [message, setMessage] = useState();
  const [viewOrder, setViewOrder] = useState(false);

  useEffect(() => {
    Products.index().then((data) => {
      setProducts(data);
    });
  }, []);

  const addToOrder = (product_id) => {
    if (order) {
      Orders.update(product_id, order.id).then((response) => {
        setOrder(response.order);
        setMessage(response.message);
      });
    } else {
      Orders.create(product_id, 1).then((response) => {
        setOrder(response.order);
        setMessage(response.message);
      });
    }
  };

  const productsList = products.map((product) => {
    return (
      <>
        <ProductsListItem
          product={product}
          addToOrder={addToOrder}
        />
        <Divider variant="inset" component="li" />
      </>
    );
  });

  return (
    <>
      <h1>Slowfood</h1>
      {order && (
        <button data-cy="view-order" onClick={() => setViewOrder(!viewOrder)}>
          {viewOrder ? "Hide Order" : "View Order"}
        </button>
      )}
      <h3 data-cy="message-box">{message}</h3>
      {viewOrder ? (
        <OrderDetails order={order} />
      ) : (
        <List
          data-cy="product-list"
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {productsList}
        </List>
      )}
    </>
  );
};

export default App;
