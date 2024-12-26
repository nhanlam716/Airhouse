import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../stores/store";
import { logOut } from "../../stores/slices/authSlices";
import { useNavigate } from "react-router-dom";

interface ITitle {
  title?: string;
}

const HeaderContent = ({ title }: ITitle) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "[]");

  const [expander, setExpander] = useState(false);

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/register");
    localStorage.removeItem("user");
  };

  return (
    <>
      <div className="col-start-1 lg:col-start-2 col-end-3 row-start-1 row-end-2 bg-white py-[16px] px-[24px] lg:py-[24px] lg:pl-[24px] lg:pr-[49px] flex items-center justify-between border-b border-l border-[#F4F4F6]">
        <h1 className="text-[#060029] text-[24px] font-bold hidden lg:block">
          {title}
        </h1>
        <div className="flex flex-col justify-center items-center gap-[16px] lg:gap-[0px]">
          <div>
            <div
              className="py-[6px] lg:py-[8px] px-[8px] lg:px-[12px] border-[1.5px] border-[#D3D5DA] rounded-[8px] flex items-center justify-between gap-[8px] cursor-pointer"
              style={{ boxShadow: "rgba(11, 10, 15, 0.1) 0px 0px 40px 0px" }}
              onClick={() => setExpander(!expander)}
            >
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-[28px] h-[28px] lg:w-[32px] lg:h-[32px]">
                <img
                  src={user.image}
                  alt=""
                  className="aspect-square h-full w-full"
                />
              </span>
              <p className="text-[#060029] font-bold hidden lg:block">
                {user.name}
              </p>
              <button className="flex items-center justify-center w-8 h-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-5 h-5 transform transition-transform ${
                    expander ? "rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
          {expander && (
            <div className="absolute top-[9%] right-5 mt-2 w-[200px] bg-white border border-solid border-[#b9b6b6] rounded shadow-lg z-10">
              <div className="flex gap-3 px-6 py-4 border-b border-solid border-[#b9b6b6] hover:bg-gray-100 cursor-pointer">
                <img src="https://app.airhouse.vn/svgs/edit.svg" alt="pass" />
                <span>Đổi mật khẩu</span>
              </div>
              <div
                className="flex gap-3 px-6 py-4 hover:bg-gray-100 cursor-pointer"
                onClick={handleLogout}
              >
                <img src="https://app.airhouse.vn/svgs/logout.svg" alt="pass" />
                <span>Đăng xuất</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HeaderContent;
