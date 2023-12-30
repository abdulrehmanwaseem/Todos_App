import { createSlice } from "@reduxjs/toolkit";

export const Modal = createSlice({
  name: "Modal",
  initialState: {
    modalType: "",
    title: "",
    open: false,
    edit: false,
    callBack: null,
    data: null,
  },
  reducers: {
    openModal: (state, action) => {
      state.modalType = action.payload.modalType;
      state.open = true;
      state.title = action.payload.title;
      state.data = action.payload.data;
      state.callBack = action.payload.callBack;
      state.edit = action.payload.edit;
    },
    closeModal: (state) => {
      state.modalType = "";
      state.open = false;
      state.title = "";
      state.data = null;
      state.callBack = null;
      state.edit = false;
    },
  },
});

export const { openModal, closeModal } = Modal.actions;

export default Modal.reducer;
