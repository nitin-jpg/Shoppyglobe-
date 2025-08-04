import React from "react";
import useProducts from "../hooks/useProducts";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/productsSlice";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const dispatch = useDispatch();
  const search = useSelector(state => state.products.search);
  const { products, status, error } = useProducts();

  return (
    <section>
      <input
        type="text"
        className="w-full border p-2 rounded mb-4"
        placeholder="Search products…"
        value={search}
        onChange={e => dispatch(setSearch(e.target.value))}
      />
      {status === "loading" && <div>Loading…</div>}
      {error && <div className="text-red-600">{error}</div>}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductItem key={product.id} product={product}/>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
