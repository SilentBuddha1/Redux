import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slice/slice.js";

const store = configureStore({
   reducer: {
    counter: counterSlice,
   }
})


export { store };