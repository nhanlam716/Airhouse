import logoMain from "../../assets/image/main-logo.svg";
import { Link } from "react-router-dom";
import { sideBar } from "../../constants/sidebar";
import { useState } from "react";

const SidebarContent = () => {
  const [activeSideBar, setactiveSideBar] = useState(2);
  return (
    <div>
      <nav className="h-full w-[6.5rem]">
        <div className="flex justify-center mb-10">
          <a href="/" className="m-5">
            <img src={logoMain} alt="logoMain" />
          </a>
        </div>
        <div className="h-full overflow-y-auto overflow-x-hidden rounded px-3 py-4 dark:bg-gray-800">
          <div>
            <ul className="mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700">
              {sideBar.map((item, index) => (
                <li
                  className={`group mt-[12px] rounded-lg ${
                    activeSideBar === index
                      ? "bg-gray-100 dark:bg-gray-700"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  key={item.name}
                  onClick={() => setactiveSideBar(index)}
                >
                  <Link
                    to={item.link}
                    className="flex items-center justify-center p-2 text-base font-normal dark:text-white m-2"
                  >
                    <img
                      src={item.src}
                      alt={item.name}
                      className={`whitespace-nowrap px-3 group-hover:opacity-85 transition-opacity duration-200 ${
                        activeSideBar === index
                          ? "group-hover:opacity-85"
                          : "opacity-40"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SidebarContent;
