import React from "react";
import HeaderContent from "../../../layouts/app/HeaderContent";
import FormInput from "../../../components/formInput/FormInput";
import Select from "../../../components/selectForm/Select";
import { Button } from "flowbite-react";
import { BUILDINGTABLE } from "../../../constants";
import FormSelect from "../../../components/selectForm/FormSelect";

const Building = () => {
  return (
    <>
      <HeaderContent title="Quản lí tòa nhà" />
      <div className="bg-slate-50">
        <div className="flex flex-col px-5 py-4 gap-[12px]">
          <div className="items-center gap-[12px] hidden lg:flex flex-wrap">
            <FormInput placeholder="Tìm mã DA" />
            <div className="w-[200px]">
              <Select title="Khu vực" />
            </div>
            <div className="w-[200px]">
              <Select title="Phường" />
            </div>
            <FormInput placeholder="Đường" />
            <FormSelect />
            <Button color="gray">Phòng yêu thích</Button>
            <Button color="dark">Xóa bộ lọc</Button>
          </div>
          <div className="hidden lg:flex justify-end gap-[12px]">
            <Button color="dark">Xuất Excel</Button>
            <Button color="dark">Tải lên từ Excel</Button>
            <Button color="dark">Thêm tòa nhà</Button>
          </div>
        </div>
        <div className="w-full mt-7 px-1">
          <div className="rounded-[8px] border">
            <div className="py-[24px] px-[16px] flex items-center justify-between border-b-[1px]">
              <div>
                <p className="text-[#6C727F] opacity-50">Thời gian cập nhật</p>
                <p className="text-[#060029] font-bold">30 ngày gần nhất</p>
              </div>
              <hr className="w-[40px] rotate-90" />
              <div>
                <p className="text-[#6C727F] opacity-50">Tổng số tòa nhà</p>
                <p className="text-[#060029] font-bold">2482</p>
              </div>
              <hr className="w-[40px] rotate-90" />
              <div>
                <p className="text-[#6C727F] opacity-50">
                  Số lượng toà nhà đã cập nhật
                </p>
                <div className="flex gap-[8px] items-center">
                  <p className="text-[#060029] font-bold">703</p>
                  <div
                    className="text-[#27AE60] text-[12px] w-fit rounded-[12px] py-[6px] px-[8px]"
                    style={{ background: "rgba(111, 207, 151, 0.1)" }}
                  >
                    28.32%
                  </div>
                </div>
              </div>
              <hr className="w-[40px] rotate-90" />
              <div>
                <p className="text-[#6C727F] opacity-50">
                  Số lượng toà nhà đã cập nhật
                </p>
                <div className="flex gap-[8px] items-center">
                  <p className="text-[#060029] font-bold">703</p>
                  <div
                    className="text-[#27AE60] text-[12px] w-fit rounded-[12px] py-[6px] px-[8px]"
                    style={{ background: "rgba(111, 207, 151, 0.1)" }}
                  >
                    28.32%
                  </div>
                </div>
              </div>
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
                    {BUILDINGTABLE.map((item) => (
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
                      <div className="text-left">16:00 17/07/2024</div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="text-left">14:55 12/10/2024</div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="uppercase text-left ">DA1234</div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="uppercase text-left ">
                        65 Nguyễn Tư Giản
                      </div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="uppercase text-left ">Phường 12</div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="uppercase text-left ">Quận Gò Vấp</div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="uppercase text-left ">0</div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="uppercase text-left ">0</div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="uppercase text-left ">Zalo</div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="uppercase text-left ">ah71_huentk</div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <Button color="light">Xem chi tiết</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Building;
