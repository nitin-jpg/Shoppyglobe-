import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((a, c) => a + c.price * c.quantity, 0);

  if (!items.length) return <div className="p-8 text-center text-xl">Your cart is empty.</div>;

  return (
    <div className="max-w-3xl mx-auto mt-6 space-y-6">
      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="text-right text-xl font-bold mt-4">Total: ₹{total}</div>
    </div>
  );
};

export default Cart;
