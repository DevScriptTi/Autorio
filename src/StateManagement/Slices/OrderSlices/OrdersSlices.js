import { createSlice } from "@reduxjs/toolkit";

const OrdersSlices = createSlice({
  name: "Orders",
  initialState: {
    data: [],
    links: [],
    first_page_url: null,
    from: null,
    last_page: null,
    last_page_url: null,
    per_page: null,
    prev_page_url: null,
    to: null,
    total: null,
  },
  reducers: {
    setOrders: (state, action) => {
      state.data = action.payload.data.data;
      state.links = action.payload.data.links;
      state.first_page_url = action.payload.data.first_page_url;
      state.from = action.payload.data.from;
      state.last_page = action.payload.data.last_page;
      state.last_page_url = action.payload.data.last_page_url;
      state.per_page = action.payload.data.per_page;
      state.prev_page_url = action.payload.data.prev_page_url;
      state.to = action.payload.data.to;
      state.total = action.payload.data.total;
    },
    addOrder: (state, action) => {
      state.data.push(action.payload);
    },
    addOrderPictures: (state, action) => {
      let item = state.data.find(item=>item.id == action.payload.id);
      item.pictures = action.payload.paths;
      state.data = state.data.map((data) =>
        data.id === item.id ? item : data
      );
    },
    deleteOrder: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    updateOrder: (state, action) => {
      state.data = state.data.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
});

export const { setOrders, addOrder, addOrderPictures,deleteOrder, updateOrder } =
  OrdersSlices.actions;
export default OrdersSlices.reducer;
