import { configureStore } from "@reduxjs/toolkit";
import billingReducer from "../features/billing/BillingSlice";

const Store = configureStore({
  reducer: {
    billing: billingReducer,
  },
});

export default Store;