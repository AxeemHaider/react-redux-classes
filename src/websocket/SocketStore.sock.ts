import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import Connection from "./Connection.sock";

export interface IStateInterface {
  isOpen?: boolean;
  active?: boolean;
}

const initialState: IStateInterface = {
  isOpen: false,
};

class SocketStore {
  private readonly slice: ReturnType<typeof createSlice>;

  public constructor() {
    this.slice = createSlice({
      name: "wa",
      initialState,
      reducers: {
        ...Connection.reducers(),
        updateOpen2: (state, { payload }: PayloadAction<boolean>) => {
          state.isOpen = payload;
        },
      },
    });
  }

  /**
   * Return Slice reducer
   * @returns
   */
  public reducer() {
    return this.slice.reducer;
  }

  public actions() {
    const { updateOpen } = this.slice.actions;
    return this.slice.actions;
  }
}

export default SocketStore;
