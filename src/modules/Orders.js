import { api } from './network';

const Orders = {
  async create(product_id, user_id) {
    const { data } = await api.post('/orders', {
      order: { product_id: product_id, user_id: user_id }
    });
    return data;
  },

  async update(product_id, order_id) {
    const { data } = await api.put(`/orders/${order_id}`, {
      order: { product_id: product_id, order_id: order_id }
    });
    return data;
  }
};

export default Orders;
