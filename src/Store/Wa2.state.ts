import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IStateInterface } from "../websocket/SocketStore.sock";

const initialState2: IStateInterface = {
  isOpen: false,
};

const slice = createSlice({
  name: "wa2",
  initialState: initialState2,
  reducers: {
    updateOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.isOpen = payload;
    },
  },
});

export const { updateOpen } = slice.actions;

export default slice.reducer;
