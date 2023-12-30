import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/slice/Modal";

const TodosModal = () => {
  const { data, callBack, edit } = useSelector((state) => state.Modal);
  const dispatch = useDispatch();
  console.log(data?._id);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = Object.fromEntries(new FormData(e.target).entries());
      if (edit) {
        await callBack({ _id: data._id, ...formData }).unwrap();
      } else {
        await callBack(formData).unwrap();
      }
      dispatch(closeModal());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control w-full max-w-xs flex gap-4">
        <label className="form-control w-[20vw] flex gap-2">
          <span className="label-text">Enter Todo Title</span>
          <input
            type="text"
            placeholder="Type here"
            name="title"
            className="input input-bordered w-full max-w-xs"
            defaultValue={data?.title}
          />
        </label>
        <label className="form-control w-full max-w-xs flex gap-2">
          <span className="label-text">Enter Todo Description</span>
          <input
            type="text"
            name="description"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            defaultValue={data?.description}
          />
        </label>
        <label className="form-control w-full max-w-xs flex gap-2">
          <span className="label-text">Enter Todo Date</span>
          <input
            type="date"
            name="date"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            defaultValue={data?.date}
          />
        </label>
        {edit ? (
          <label className="form-control w-full max-w-xs flex gap-2">
            <span className="label-text">Select Actions?</span>
            <select
              defaultValue={data?.status}
              name="status"
              className="select select-bordered"
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </label>
        ) : null}
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
      </div>
    </form>
  );
};

export default TodosModal;
