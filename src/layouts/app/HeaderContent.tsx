import React from "react";
import avartar from "../../assets/image/avatar-generations_rpge.jpg";
import arrow from "../../assets/image/arrow-down.svg";

interface ITitle {
  title?: string;
}

const HeaderContent = ({ title }: ITitle) => {
  return (
    <>
      <div className="col-start-1 lg:col-start-2 col-end-3 row-start-1 row-end-2 bg-white py-[16px] px-[24px] lg:py-[24px] lg:pl-[24px] lg:pr-[49px] flex items-center justify-between border-b border-l border-[#F4F4F6]">
        <h1 className="text-[#060029] text-[24px] font-bold hidden lg:block">
          {title}
        </h1>
        <div className="flex justify-center items-center gap-[16px] lg:gap-[0px]">
          <div>
            <div
              className="py-[6px] lg:py-[8px] px-[8px] lg:px-[12px] border-[1.5px] border-[#D3D5DA] rounded-[8px] flex items-center justify-between gap-[8px] cursor-pointer"
              style={{ boxShadow: "rgba(11, 10, 15, 0.1) 0px 0px 40px 0px" }}
            >
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-[28px] h-[28px] lg:w-[32px] lg:h-[32px]">
                <img
                  src={avartar}
                  alt=""
                  className="aspect-square h-full w-full"
                />
              </span>
              <p className="text-[#060029] font-bold hidden lg:block">tan</p>
              <img src={arrow} alt="avartar" width={"16px"} height={"16px"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderContent;
