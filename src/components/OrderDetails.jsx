import React from 'react';

const OrderDetails = ({ order }) => {

  const productsDisplay = order.products.map(product => {
    return (
      <div key={product.id}>
        {product.name} - {product.price} kr
      </div>
    )
  });

  return (
    <div data-cy="order-details">
      <h3>Your Order</h3>
      <div data-cy="order-products">{productsDisplay}</div>
      <div data-cy="order-total">Total to pay:{order.order_total} kr</div>
      <button>Confirm</button>
    </div>
  );
};

export default OrderDetails;
