import React from "react";
import { Route, Routes } from "react-router-dom";
import Airhouse from "../layouts/app/Airhouse";
import MainLayout from "../layouts/app/MainLayout";

const Building = React.lazy(() => import("../pages/admin/building"));
const RoomManagement = React.lazy(
  () => import("../pages/admin/roomManagement")
);
const RoomList = React.lazy(() => import("../pages/admin/roomList"));
const Sale = React.lazy(() => import("../pages/admin/sale"));
const Login = React.lazy(() => import("../pages/admin/login"));
const Register = React.lazy(() => import("../pages/register/Register"));
const ForgotPassword = React.lazy(
  () => import("../pages/register/ForgotPasswords")
);

const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route element={<Airhouse />}>
          <Route path="/" element={<MainLayout />} />
          <Route path="/building" element={<Building />} />
          <Route path="/roomManagement" element={<RoomManagement />} />
          <Route path="/roomList" element={<RoomList />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route>
          <Route path="/register" element={<Register />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AllRouter;
