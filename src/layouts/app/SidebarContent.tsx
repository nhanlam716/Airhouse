import React from "react";
import building from "../../assets/image/building.svg";
import house from "../../assets/image/house.svg";
import sale from "../../assets/image/sales.svg";
import clock from "../../assets/image/clock-reload.svg";
import user from "../../assets/image/users.svg";
import logoMain from "../../assets/image/main-logo.svg";
import { Link } from "react-router-dom";

const SidebarContent = () => {
  return (
    <div>
      <nav className="h-full w-[6.5rem]">
        <div className="flex justify-center mb-10">
          <a href="./Airhouse.tsx" className="m-5">
            <img src={logoMain} alt="" />
          </a>
        </div>
        <div className="h-full overflow-y-auto overflow-x-hidden rounded px-3 py-4 dark:bg-gray-800">
          <div>
            <ul className="mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700">
              <li className="mt-[12px]">
                {/* <a
                  href="./Airhouse.tsx"
                  className="flex items-center justify-center rounded-lg p-2 text-base font-normal hover:bg-gray-100 dark:text-white dark:hover:bg-gray-500 m-2"
                </a>
                > */}
                <Link
                  to="/building"
                  className="flex items-center justify-center rounded-lg p-2 text-base font-normal hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 m-2"
                >
                  <span className="whitespace-nowrap px-3 opacity-40 hover:opacity-85">
                    <img src={building} alt="building" />
                  </span>
                </Link>
              </li>
              <li className="mt-[12px]">
                {/* <a
                  href="./Airhouse.tsx"
                  className="flex items-center justify-center rounded-lg p-2 text-base font-normal hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 m-2"
                >
                </a> */}
                <Link
                  to="/roomManagement"
                  className="flex items-center justify-center rounded-lg p-2 text-base font-normal hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 m-2"
                >
                  <span className="whitespace-nowrap px-3 opacity-40 hover:opacity-85">
                    <img src={house} alt="house" />
                  </span>
                </Link>
              </li>
              <li className="mt-[12px]">
                {/* <a
                  href="./Airhouse.tsx"
                  className="flex items-center justify-center rounded-lg p-2 text-base font-normal hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 m-2"
                >
                </a> */}
                <Link
                  to="/roomList"
                  className="flex items-center justify-center rounded-lg p-2 text-base font-normal hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 m-2"
                >
                  <span className="whitespace-nowrap px-3 opacity-40 hover:opacity-85">
                    <img src={sale} alt="sale" />
                  </span>
                </Link>
              </li>
              <li className="mt-[12px]">
                {/* <a
                  href="./Airhouse.tsx"
                  className="flex items-center justify-center rounded-lg p-2 text-base font-normal hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 m-2"
                >
                </a> */}
                <Link
                  to="/sale"
                  className="flex items-center justify-center rounded-lg p-2 text-base font-normal hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 m-2"
                >
                  <span className="whitespace-nowrap px-3 opacity-40 hover:opacity-85">
                    <img src={clock} alt="clock" />
                  </span>
                </Link>
              </li>
              <li className="mt-[12px]">
                {/* <a
                  href="./Airhouse.tsx"
                  className="flex items-center justify-center rounded-lg p-2 text-base font-normal hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 m-2"
                >
                </a> */}
                <Link
                  to="/login"
                  className="flex items-center justify-center rounded-lg p-2 text-base font-normal hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 m-2"
                >
                  <span className="whitespace-nowrap px-3 opacity-40 hover:opacity-85">
                    <img src={user} alt="user" />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SidebarContent;
