import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/config";

const initialState = {
  loading: false,
  productsData: [],
  error: "",
};

const fetchProductsData = createAsyncThunk(
  "productsData/fetchProductsData",
  () => {
    return api.get("products");
  }
);

const productsDataSlice = createSlice({
  name: "productsData",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProductsData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductsData.fulfilled, (state, action) => {
      state.loading = false;
      state.productsData = action.payload;
    });
    builder.addCase(fetchProductsData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default productsDataSlice.reducer;
export { fetchProductsData };
