import React from "react";
import { Outlet } from "react-router-dom";
import SidebarContent from "./SidebarContent";

const Airhouse = () => {
  return (
    <>
      <div className="flex">
        <SidebarContent />
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Airhouse;
