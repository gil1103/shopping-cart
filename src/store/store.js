import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartUiSlice";
import cartContentSlice from './cartContentSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    content: cartContentSlice.reducer
  }
})

export default store