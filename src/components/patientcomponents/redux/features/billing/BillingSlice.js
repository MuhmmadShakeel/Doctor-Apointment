import { createSlice } from "@reduxjs/toolkit";

const calculateTotals = (state) => {
  state.subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  state.tax = state.subtotal * 0.1; 
  state.grandTotal = state.subtotal + state.tax;
};

const billingSlice = createSlice({
  name: "billing",
  initialState: {
    items: [],
    subtotal: 0,
    tax: 0,
    grandTotal: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
      calculateTotals(state);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      calculateTotals(state);
    },
    clearCart: (state) => {
      state.items = [];
      state.subtotal = 0;
      state.tax = 0;
      state.grandTotal = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = billingSlice.actions;
export default billingSlice.reducer;