import React from "react";

const OrderDetails = ({ order }) => {

  const productsDisplay = order.products.map(product => {
    return (
      <div key={product.id}>
        {product.name} - {product.price} kr
      </div>
    )
  })
  return (
    <div data-cy="order-details">
      <h3>Your order</h3>
      <div data-cy="order-products">{productsDisplay}</div>
    </div>
  );
};

export default OrderDetails;
 