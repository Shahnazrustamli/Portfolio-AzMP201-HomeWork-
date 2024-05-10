import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  card: [],
};
export const getCard = createAsyncThunk("getCard", async () => {
  const { data } = await axios.get("https://northwind.vercel.app/api/products");
  return data;
});
// https://fakestoreapi.com/products
export const cardSlices = createSlice({
  name: "card",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCard.fulfilled, (state, action) => {
      state.card = action.payload;
    });
  },
});

// export const {} = cardSlices.actions;

export default cardSlices.reducer;
