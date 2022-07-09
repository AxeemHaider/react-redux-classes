import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import wa2Reducer from "./Wa2.state";
import SocketStore from "../websocket/SocketStore.sock";

const socketStore = new SocketStore();

const store = configureStore({
  reducer: {
    wa: socketStore.reducer(),
    wa2: wa2Reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
