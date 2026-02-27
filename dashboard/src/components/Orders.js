import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/orders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setOrders(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="orders">
      <h3>Orders</h3>

      {orders.length === 0 && <p>No orders placed yet.</p>}

      {orders.map((order, index) => (
        <p key={index}>
          {order.name} – {order.qty} @ {order.price} ({order.mode})
        </p>
      ))}
    </div>
  );
};

export default Orders;