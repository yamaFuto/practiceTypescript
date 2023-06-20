import { configureStore } from "@reduxjs/toolkit";
import reducer from "./modules/counter";
import worker from "./modules/work";

export const store = configureStore({
  reducer: {
    counter: reducer,
    work: worker
  }
})

export default store;