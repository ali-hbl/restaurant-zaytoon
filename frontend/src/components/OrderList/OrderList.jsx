import React from 'react';
import './styles.scss';

const OrderList = ({ orders }) => {
  // filter orders and group them by time
  const ordersByTime = orders.reduce((acc, order) => {
    // convert the order's created_at timestamp to a time string and use it as the key for the object
    const time = new Date(order.created_at).toLocaleTimeString();

    // if there's no orders array for the current time yet, create it
    if (!acc[time]) acc[time] = [];

    // add the current order to the orders array for the current time
    acc[time].push(order);

    return acc;
  }, {});

  // Calculate total for each order and generate order list items
  const orderListItems = Object.entries(ordersByTime).map(([time, orders]) => {
    let total = 0;
    let date;

    const orderItems = orders
      .map((order) => {
        date = new Date(order.created_at).toLocaleDateString();
        total += order.price * order.quantity;

        return `${order.product_name} (${order.quantity}x)`;
      })
      .join(', ');

    return (
      <div key={time} className="order-list-container">
        <div className="order-list-details">
          <p>
            <span>Date:</span> {`${date} à ${time}`}
          </p>
          <p>
            <span>Commande:</span> {orderItems}
          </p>

          <p>
            <span>Total:</span> {total.toFixed(2)}€
          </p>
        </div>
      </div>
    );
  });

  return <div className="order-list">{orderListItems}</div>;
};

export default OrderList;
