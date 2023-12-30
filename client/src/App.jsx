import React from "react";
import Layout from "./layout/Layout";
import DashBoard from "./screens/dashBoard";
import Todos from "./screens/todos";
import Drawer from "./screens/drawer";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Modal from "./components/Modal";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <DashBoard />,
        },
        {
          path: "todos",
          element: <Todos />,
        },
        {
          path: "drawer",
          element: <Drawer />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <Modal />
    </>
  );
};

export default App;
