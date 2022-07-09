import { PayloadAction } from "@reduxjs/toolkit";
import SocketStore, { IStateInterface } from "./SocketStore.sock";

class Connection extends SocketStore {
  public static reducers() {
    return {
      updateOpen: (
        state: IStateInterface,
        { payload }: PayloadAction<boolean>
      ) => {
        state.isOpen = payload;
      },
    };
  }

  public init() {
    const { updateOpen } = this.actions();
  }
}

export default Connection;
