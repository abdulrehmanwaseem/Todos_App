import React from "react";
import { ClipboardCheck, LayoutDashboard, Menu } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="w-full h-[5vh] shadow-md shadow-slate-300 flex">
        <div className="drawer gap-2 ">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex gap-2  items-center ">
            <label htmlFor="my-drawer" className="">
              <Menu />
            </label>
            <p className="text-lg font-semibold text-indigo-400">Todos</p>
          </div>
          <div className="drawer-side items-center -ml-1 z-10">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <SideBar />
          </div>
        </div>
      </div>
      <div className="w-full h-[95vh]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

const SideBar = () => {
  const lists = [
    {
      title: "DashBoard",
      link: "/",
      icon: <LayoutDashboard size={22} />,
    },
    {
      title: "Todos",
      link: "/todos",
      icon: <ClipboardCheck size={22} />,
    },
    {
      title: "Drawer",
      link: "/drawer",
      icon: <ClipboardCheck size={22} />,
    },
  ];
  return (
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content  shadow-md shadow-slate-300 ">
      {lists.map((val, index) => (
        <NavLink to={val.link} key={index}>
          <li className="flex flex-row items-center">
            <span>{val.icon}</span>
            {val.title}
          </li>
        </NavLink>
      ))}
    </ul>
  );
};
