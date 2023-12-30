import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/slice/Modal";

const ConfirmationModal = () => {
  const { data, callBack } = useSelector((state) => state.Modal);
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await callBack({ _id: data._id }).unwrap();
      dispatch(closeModal());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={submitHandler}>
        <p>Are you sure? you want to delete this!</p>{" "}
        <div className="modal-action">
          <button className="btn btn-outline btn-sm" type="submit">
            Confirm
          </button>
          <button
            className="btn btn-outline btn-sm"
            type="button"
            onClick={() => dispatch(closeModal())}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConfirmationModal;
