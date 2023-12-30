import React, { useState } from "react";
import DataTable from "../../components/DataTable";
import {
  useGetTodosQuery,
  useCreateTodosMutation,
  useUpdateTodosMutation,
  useDeleteTodosMutation,
} from "../../redux/apis/apis";

const Index = () => {
  const [filters, setFilters] = useState({
    sort: -1,
    sortBy: "_id",
    search: "",
    searchBy: "",
    page: null,
    perPage: 20,
  });

  const { data: customers = {} } = useGetTodosQuery(filters);
  const { data = [], totalRecords = 0 } = customers;

  const [createTodos] = useCreateTodosMutation();
  const [updateTodos] = useUpdateTodosMutation();
  const [deleteTodos] = useDeleteTodosMutation();

  const column = [
    { title: "ID", accessor: "_id", hideId: true },
    { title: "Title", accessor: "title" },
    { title: "Description", accessor: "description" },
    { title: "Date", accessor: "date" },
    { title: "Status", accessor: "status" },
  ];

  return (
    <DataTable
      totalRecords={totalRecords}
      data={data}
      createTodos={createTodos}
      updateTodos={updateTodos}
      deleteTodos={deleteTodos}
      column={column}
      filters={filters}
      setFilters={setFilters}
    />
  );
};

export default Index;
