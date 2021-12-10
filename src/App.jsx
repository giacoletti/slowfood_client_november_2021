import React, { useState, useEffect } from 'react';
import Products from './modules/Products';
import Orders from './modules/Orders';
import OrderDetails from './components/OrderDetails';

const App = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState();
  const [order, setOrder] = useState();
  const [viewOrder, setViewOrder] = useState(false);

  useEffect(() => {
    Products.index().then(data => {
      setProducts(data);
    });
  }, []);

  const addToOrder = (id) => {
    if (order) {
      Orders.update(id, order.id).then(response => {
        setMessage(response.message);
        setOrder(response.order);
      });
    } else {
      Orders.create(id, 1).then(response => {
        setMessage(response.message);
        setOrder(response.order);
      });
    }
  };

  const productsList = products.map((product) => {
    return (
      <div key={product.id}>
        {product.name} - {`${product.price} kr`}
        <button onClick={() => addToOrder(product.id)}>Add to Order</button>
      </div>
    )
  });

  return (
    <>
      <h1>Slowfood</h1>
      {order && <button data-cy="view-order" onClick={() => setViewOrder(!viewOrder)}>
        {viewOrder ? "Hide Order" : "View Order"}
      </button>}
      <h3 data-cy="message-box">{message}</h3>
      {viewOrder ? (
        <OrderDetails order={order} />
      ) : (
        <div data-cy="product-list">{productsList}</div>
      )}
    </>
  );
};

export default App;
