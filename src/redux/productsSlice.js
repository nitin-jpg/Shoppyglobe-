import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("https://dummyjson.com/products");
    return res.data.products;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: { list: [], status: "idle", error: null, search: "" },
  reducers: {
    setSearch: (state, action) => { state.search = action.payload },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => { state.status = "loading" })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "succeeded"
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message
      });
  }
});

export const { setSearch } = productsSlice.actions
export default productsSlice.reducer;
