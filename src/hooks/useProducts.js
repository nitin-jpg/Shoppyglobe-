import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productsSlice";

const useProducts = () => {
  const dispatch = useDispatch();
  const { list, status, error, search } = useSelector(state => state.products);

  useEffect(() => {
    if (status === "idle") dispatch(fetchProducts())
  }, [dispatch, status]);

  const filteredProducts = search
    ? list.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
    : list;

  return { products: filteredProducts, status, error };
}

export default useProducts
