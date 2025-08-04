import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, changeQuantity } from "../redux/cartSlice";
import PropTypes from "prop-types";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded shadow">
      <img className="w-20 h-20 object-contain rounded" src={item.thumbnail} alt={item.title}/>
      <div className="flex-1">
        <h4 className="font-semibold">{item.title}</h4>
        <div className="flex gap-2 items-center mt-1">
          <span>₹{item.price}</span>
          <input
            type="number"
            min="1"
            value={item.quantity}
            className="w-14 p-1 border rounded text-center"
            onChange={e =>
              dispatch(changeQuantity({ id: item.id, quantity: Number(e.target.value) }))
            }
          />
          <button
            className="ml-2 text-red-600 underline"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = { item: PropTypes.object.isRequired };
export default CartItem;
