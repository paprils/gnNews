import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface ListTypeState {
  type: "list" | "tiles";
}

const initialState: ListTypeState = {
  type: "list",
};

export const listTypeSlice = createSlice({
  name: "listType",
  initialState,
  reducers: {
    setListType: (state, action: PayloadAction<{ type: "list" | "tiles" }>) => {
      state.type = action.payload.type;
    },
  },
});

export const { setListType } = listTypeSlice.actions;

export const selectListType = (state: RootState) => state.listType;

export default listTypeSlice.reducer;
