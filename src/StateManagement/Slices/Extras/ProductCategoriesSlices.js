import { createSlice } from "@reduxjs/toolkit";

const ProductCategoriesSlices = createSlice({
  name: "ProductCategories",
  initialState: [],
  reducers: {
    setProductCategories: (state, action) => action.payload,
    addProductCategories: (state, action) => {
      state.push(action.payload);
    },
    deleteProductCategories: (state, action) => {
      return state.filter((item) => item.id !== action.payload); // Return the new filtered state
    },
    updateProductCategories: (state, action) => {
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      ); // Return the new updated state
    },
  },
});

export const {
  setProductCategories,
  addProductCategories,
  deleteProductCategories,
  updateProductCategories,
} = ProductCategoriesSlices.actions;
export default ProductCategoriesSlices.reducer;
