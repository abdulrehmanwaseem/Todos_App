import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const queryStringGenerator = (url, filters) => {
  let urlQuery = url;
  Object.entries(filters).map(([key, value], indx) => {
    if (indx === 0) {
      urlQuery += `?${key}=${value}`;
    } else {
      urlQuery += `&${key}=${value}`;
    }
  });
  return urlQuery;
};

export const apis = createApi({
  reducerPath: "apis",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api/" }),
  tagTypes: ["Todos"],
  keepUnusedDataFor: 0.01,
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (filters) => queryStringGenerator("todos", filters),
      providesTags: ["Todos"],
    }),
    createTodos: builder.mutation({
      query: (data) => ({
        url: `todos`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Todos"],
    }),
    updateTodos: builder.mutation({
      query: (data) => ({
        url: `todos/${data._id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Todos"],
    }),
    deleteTodos: builder.mutation({
      query: (data) => ({
        url: `todos/${data._id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
    getDashboard: builder.query({
      query: () => ({
        url: `dashboard`,
        method: "GET",
      }),
      providesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useCreateTodosMutation,
  useDeleteTodosMutation,
  useGetTodosQuery,
  useUpdateTodosMutation,
  useGetDashboardQuery,
} = apis;
