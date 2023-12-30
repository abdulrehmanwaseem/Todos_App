import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/slice/Modal";
import ConfirmationModal from "./ConfirmationModal";
import TodosModal from "../screens/todos/TodosModal";

const Modal = () => {
  const { modalType, open, title } = useSelector((state) => state.Modal);
  const dispatch = useDispatch();
  return (
    <dialog className="modal " open={open}>
      <div className="modal-box w-[22vw] shadow-md outline shadow-slate-100">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => dispatch(closeModal())}
          >
            ✕
          </button>
        </form>
        <h1 className="text-blue-500 font-bold text-lg mb-3">{title}!</h1>
        {checkModal(modalType)}
      </div>
    </dialog>
  );
};

export default Modal;

const checkModal = (name) => {
  let component = null;
  switch (name) {
    case "todos":
      component = <TodosModal />;
      break;
    case "confirmation":
      component = <ConfirmationModal />;
  }
  return component;
};
