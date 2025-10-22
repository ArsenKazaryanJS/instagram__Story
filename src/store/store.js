import { configureStore } from "@reduxjs/toolkit";
import { followsReducer } from "./slices/follows/followsSlices";

export const store = configureStore({
  reducer: {
    follows:followsReducer
  },
});
