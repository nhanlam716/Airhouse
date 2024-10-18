import React from "react";
import SidebarContent from "./SidebarContent";
import { Outlet } from "react-router-dom";

const MainContent = () => {
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

export default MainContent;
