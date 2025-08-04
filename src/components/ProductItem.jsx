import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import PropTypes from "prop-types";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col">
      <Link to={`/product/${product.id}`}>
        <img className="h-40 w-full object-cover rounded mb-3" src={product.thumbnail} alt={product.title}/>
        <h3 className="font-semibold text-lg">{product.title}</h3>
        <p className="text-blue-900 font-bold mt-1">₹{product.price}</p>
      </Link>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-auto bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};
ProductItem.propTypes = { product: PropTypes.object.isRequired };
export default ProductItem;
