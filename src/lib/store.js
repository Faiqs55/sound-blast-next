import { configureStore } from "@reduxjs/toolkit";
import miniPlayerReducer from './features/miniPlayerSlice';

const store = configureStore({
  reducer: {
    miniPlayer: miniPlayerReducer
  },
});

export default store;