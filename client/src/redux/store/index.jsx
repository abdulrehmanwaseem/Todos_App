import { configureStore } from "@reduxjs/toolkit";
import Modal from "../slice/Modal";
import { apis } from "../apis/apis";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: { Modal: Modal, [apis.reducerPath]: apis.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(apis.middleware),
});
setupListeners(store.dispatch);
