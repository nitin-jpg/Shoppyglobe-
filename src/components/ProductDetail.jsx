import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(() => setError("Failed to load product."));
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!product) return <div>Loading…</div>;

  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white rounded-lg p-6 shadow-md">
      <img src={product.thumbnail} className="w-full md:w-80 rounded" alt={product.title}/>
      <div>
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="mt-2 text-lg text-blue-900 font-semibold">₹{product.price}</p>
        <p className="mt-2">{product.description}</p>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
