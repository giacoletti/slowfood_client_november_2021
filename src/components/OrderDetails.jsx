import React from 'react';

const OrderDetails = ({ order }) => {
  return (
    <div data-cy="order-details">
      <h1>{order.products.length}</h1>
    </div>
  );
};

export default OrderDetails;
