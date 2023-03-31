import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import listTypeReducer from "../features/listType/listTypeSlice";

export const store = configureStore({
  reducer: {
    listType: listTypeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
