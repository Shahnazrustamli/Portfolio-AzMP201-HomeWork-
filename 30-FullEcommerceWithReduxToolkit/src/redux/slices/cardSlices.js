import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  card: [],
};
export const getCard = createAsyncThunk("getCard", async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
});
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
