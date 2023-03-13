import { createSlice } from "@reduxjs/toolkit";

type likeProductsType = {
  [id: number]: boolean;
};

export const initialState: likeProductsType = {
  1: true,
  2: false,
  4: true,
  6: true,
};

export const LikeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {},
});

export default LikeSlice.reducer;
