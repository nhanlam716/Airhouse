import React from "react";
import FormInput from "../../../components/formInput/FormInput";
import Select from "../../../components/selectForm/Select";
import { Button } from "flowbite-react";
import { LOGINTABLE } from "../../../constants";
import HeaderContent from "../../../layouts/app/HeaderContent";

const Login = () => {
  return (
    <>
      <HeaderContent title="Yêu cầu đăng nhập" />
      <div className="bg-slate-50">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-start gap-4 px-5 pt-8">
          <FormInput placeholder="Mã nhân viên" />
          <FormInput placeholder="Email" />
          <Select title="Type" />
          <Button color="dark">Xóa bộ lọc</Button>
        </div>
        <div className="w-full mt-7 px-1">
          <div className="rounded-[8px] border">
            <div className="py-[24px] px-[16px] flex items-center justify-between border-b-[1px]">
              <div>
                <p className="text-[#6C727F] opacity-50">Tổng số yêu cầu</p>
                <p className="text-[#060029] font-bold">137</p>
              </div>
            </div>
            <div
              className="overflow-auto"
              style={{ width: "calc(-136px + 100vw)" }}
            >
              <div className="relative w-full">
                <table className="w-full caption-bottom text-sm">
                  <thead className="[&_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      {LOGINTABLE.map((item) => (
                        <td
                          key={item.name}
                          className="h-12 px-4 text-left align-middle [&:has([role=checkbox])]:pr-0 text-[#060029] font-bold"
                        >
                          {item.name}
                        </td>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="[&_tr:last-child]:border-0">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className=" capitalize">ah85_ngandk</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className=" capitalize">
                          ah85_ngandk@airhouse.vn{" "}
                        </div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase max-w-[600px]  ">
                          smartphone - iOS - 17.6 - Mobile Safari - 17.6
                        </div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="text-[14px] text-white w-fit rounded-[4px] py-[2px] px-[4px] bg-[#FFB154]">
                          Chờ xử lý
                        </div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="capitalize  ">22:36 11/10/2024</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="flex flex-col gap-[6px]">
                          <Button color="light">Chấp nhận</Button>
                          <Button color="dark">Từ chối</Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
