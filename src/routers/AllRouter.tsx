import React from "react";
import { Route, Routes } from "react-router-dom";

const MainContent = React.lazy(() => import("../layouts/app/MainContent"));
const Building = React.lazy(() => import("../pages/admin/building"));
const RoomManagement = React.lazy(
  () => import("../pages/admin/roomManagement")
);
const RoomList = React.lazy(() => import("../pages/admin/roomList"));
const Sale = React.lazy(() => import("../pages/admin/sale"));
const Login = React.lazy(() => import("../pages/admin/login"));

const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainContent />}>
          <Route path="/building" element={<Building />} />
          <Route path="/roomManagement" element={<RoomManagement />} />
          <Route path="/roomList" element={<RoomList />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AllRouter;