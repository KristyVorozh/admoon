import { configureStore } from "@reduxjs/toolkit";
import { boxModel } from "../entities/box";

export const store = configureStore({
  reducer: {
    box: boxModel.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
