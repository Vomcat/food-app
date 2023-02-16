import { useState, useEffect } from "react";

import { OrderItemProps } from "interfaces/Order";

import OrderItem from "./OrederItem";

const OrederList = () => {
  const [orders, setOrders] = useState<OrderItemProps[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(" http://localhost:3000/order");
      const data = await response.json();
      setOrders(data);
    } catch (err) {
      throw new Error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {orders.map((order, index) => (
        <OrderItem
          key={index}
          name={order.name}
          lastName={order.lastName}
          email={order.email}
          phoneNumber={order.phoneNumber}
          city={order.city}
          streetAddress={order.streetAddress}
          streetNumber={order.streetNumber}
          postCode={order.postCode}
          date={order.date}
          orderItems={order.orderItems}
          orderTotalPrice={order.orderTotalPrice}
        />
      ))}
    </>
  );
};

export default OrederList;
