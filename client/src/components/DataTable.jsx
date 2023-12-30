import React, { useEffect, useState } from "react";
import {
  ArrowDownAZ,
  ArrowUpZA,
  ClipboardEdit,
  MoreHorizontal,
  Trash2,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/slice/Modal";
import { PlusCircle } from "lucide-react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

const DataTable = ({
  column,
  data,
  filters,
  setFilters,
  totalRecords,
  createTodos,
  updateTodos,
  deleteTodos,
}) => {
  const dispatch = useDispatch();

  const sortByHandler = (name) => {
    const newSort = filters.sortBy === name && filters.sort === -1 ? 1 : -1;
    setFilters({
      ...filters,
      sortBy: name,
      sort: newSort,
    });
  };
  const sortIcons = (name) => {
    if (name === filters.sortBy) {
      return filters.sort === -1 ? (
        <ArrowDownAZ size={20} className="text-indigo-400 " />
      ) : (
        <ArrowUpZA size={20} className="text-indigo-400 " />
      );
    }
    return <ArrowUpZA size={20} className="text-indigo-400 " />;
  };

  const actionsRow = (data) => {
    return (
      <div className="dropdown dropdown-left ">
        <div tabIndex={0} role="button">
          <MoreHorizontal />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] mr-2 menu p-2 shadow -mt-2 bg-base-100 rounded-box outline "
        >
          <div className="flex gap-3 p-1 cursor-pointer">
            <Trash2
              onClick={() =>
                dispatch(
                  openModal({
                    modalType: "confirmation",
                    open: true,
                    title: "Confirmation",
                    edit: true,
                    data: data,
                    callBack: deleteTodos,
                  })
                )
              }
            />
            <ClipboardEdit
              onClick={() =>
                dispatch(
                  openModal({
                    modalType: "todos",
                    open: true,
                    title: "Edit",
                    edit: true,
                    data: data,
                    callBack: updateTodos,
                  })
                )
              }
            />
          </div>
        </ul>
      </div>
    );
  };
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    const calculatePageNumbers = () => {
      const pages = [];
      for (let i = 1; i <= Math.ceil(totalRecords / filters.perPage); i++) {
        pages.push(i);
      }
      console.log(pages);
      setPageNumbers(pages);
    };

    calculatePageNumbers();
  }, [totalRecords, filters.perPage]);

  return (
    <>
      <div className="h-[7vh]  bg-slate-600 flex items-center w-full px-4 justify-between">
        <button
          className="btn"
          onClick={() =>
            dispatch(
              openModal({
                modalType: "todos",
                open: true,
                edit: false,
                title: "Add Todos",
                callBack: createTodos,
              })
            )
          }
        >
          Add
          <PlusCircle />
        </button>
        <ResponsivePagination
          previousLabel="Previous"
          current={filters.page}
          total={pageNumbers.length}
          onPageChange={(e) => setFilters((prev) => ({ ...prev, page: e }))}
          nextLabel="Next"
        />
      </div>
      <table className="table ">
        <thead>
          <tr>
            {column.map(
              (val, index) =>
                !val.hideId && (
                  <th className="w-[24vw]" key={index}>
                    <div
                      className="flex cursor-pointer items-center gap-1"
                      onClick={() => sortByHandler(val.accessor)}
                    >
                      {val.title}
                      {sortIcons(val.accessor)}
                    </div>
                    <input
                      onChange={(e) =>
                        setFilters({
                          searchBy: val.accessor,
                          search: e.target.value,
                        })
                      }
                      className="input input-xs input-bordered w-full max-w-full my-2 bg-stone-300 text-black"
                    />
                  </th>
                )
            )}
          </tr>
        </thead>
        <tbody>
          {data?.map((value, ind) => (
            <tr key={ind}>
              {column.map(
                (val, i) =>
                  !val.hideId && (
                    <td key={i}>
                      {val.accessor === "date"
                        ? new Date(value[val.accessor]).toLocaleDateString(
                            "en-GB"
                          )
                        : value[val.accessor]}
                    </td>
                  )
              )}
              <td>{actionsRow(value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DataTable;
