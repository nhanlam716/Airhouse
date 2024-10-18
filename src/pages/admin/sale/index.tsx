import React from "react";
import FormInput from "../../../components/formInput/FormInput";
import Select from "../../../components/selectForm/Select";
import { Button } from "flowbite-react";
import { SALETABLE } from "../../../constants";
import HeaderContent from "../../../layouts/app/HeaderContent";

const Sale = () => {
  return (
    <>
      <HeaderContent title="Thông tin nhân viên" />
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
                <p className="text-[#6C727F] opacity-50">Tổng số nhân viên</p>
                <p className="text-[#060029] font-bold">37</p>
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
                      {SALETABLE.map((item) => (
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
                        <div className="text-center">ah90_thanhnv</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="text-center">
                          ah90_thanhnv@airhouse.vn
                        </div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">sale</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">0</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">9</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">0</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">0</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">0</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">0</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">0</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="text-center">09:50 04/10/2024</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="flex flex-col gap-[6px]">
                          <Button color="dark">Xóa</Button>
                          <Button color="light">Xem chi tiết</Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="text-center">ah90_thanhnv</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="text-center">
                          ah90_thanhnv@airhouse.vn
                        </div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">sale</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">0</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">9</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">0</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">0</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">0</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">0</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">0</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="text-center">09:50 04/10/2024</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="flex flex-col gap-[6px]">
                          <Button color="dark">Xóa</Button>
                          <Button color="light">Xem chi tiết</Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="text-center">ah90_thanhnv</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="text-center">
                          ah90_thanhnv@airhouse.vn
                        </div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">sale</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">0</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">9</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">0</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">0</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">0</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">0</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">0</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="text-center">09:50 04/10/2024</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="flex flex-col gap-[6px]">
                          <Button color="dark">Xóa</Button>
                          <Button color="light">Xem chi tiết</Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="text-center">ah90_thanhnv</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="text-center">
                          ah90_thanhnv@airhouse.vn
                        </div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">sale</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">0</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">9</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">0</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">0</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">0</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">0</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="uppercase text-center ">0</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="text-center">09:50 04/10/2024</div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="flex flex-col gap-[6px]">
                          <Button color="dark">Xóa</Button>
                          <Button color="light">Xem chi tiết</Button>
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

export default Sale;
