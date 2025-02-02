import { configureStore } from "@reduxjs/toolkit";
import miniPlayerReducer from './features/miniPlayerSlice';
import { userReducer } from "./features/userAuthSlice";

const store = configureStore({
  reducer: {
    miniPlayer: miniPlayerReducer,
    userReducer
  },
});

export default store;