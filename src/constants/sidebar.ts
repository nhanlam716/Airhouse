import building from "../../../my-project/src/assets/image/building.svg";
import house from "../../../my-project/src/assets/image/house.svg";
import sale from "../../../my-project/src/assets/image/sales.svg";
import clock from "../../../my-project/src/assets/image/clock-reload.svg";
import user from "../../../my-project/src/assets/image/users.svg";

export const sideBar = [
  {
    src: building,
    name: "building",
    link: "/building",
  },
  {
    src: house,
    name: "house",
    link: "/roomManagement",
  },
  {
    src: sale,
    name: "sale",
    link: "/roomList",
  },
  {
    src: clock,
    name: "clock",
    link: "/sale",
  },
  {
    src: user,
    name: "user",
    link: "/login",
  },
];
