import React from "react";
import HeaderContent from "../../../layouts/app/HeaderContent";
import FormInput from "../../../components/formInput/FormInput";
import Select from "../../../components/selectForm/Select";
import { Button } from "flowbite-react";
import { ROOMSTABLE } from "../../../constants";
import { PRICES, ROOMTYPE } from "../../../constants/select";

const RoomManagement = () => {
  return (
    <div>
      <HeaderContent title="Quản lí phòng" />
      <div className="bg-slate-50">
        <div className="flex flex-col px-5 py-4 gap-[12px]">
          <div className="items-center gap-[12px] hidden lg:flex flex-wrap">
            <FormInput placeholder="Tìm mã DA" />
            <FormInput placeholder="Mã phòng" />
            <FormInput placeholder="Đường" />
            <Select title="Khoảng giá">
              {PRICES.map((item) => (
                <option key={item.id} value={item.price}>
                  {item.price}
                </option>
              ))}
            </Select>
            <Select title="Loại phòng">
              {ROOMTYPE.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </Select>
            <Select title="Còn">
              <option value="Lock">Lock</option>
            </Select>
            <Select title="Người cập nhật" />
            <Button color="dark">Xóa bộ lọc</Button>
          </div>
          <div className="hidden lg:flex justify-end gap-[12px]">
            <Button color="dark">Xuất Excel</Button>
            <Button color="dark">Thêm phòng</Button>
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
                <p className="text-[#060029] font-bold">1880</p>
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
                  <p className="text-[#060029] font-bold">1059</p>
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
                    {ROOMSTABLE.map((item) => (
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
                      <div className="text-center">16:00 17/07/2024</div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="text-center">14:55 12/10/2024</div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="uppercase text-center ">DA1234</div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="uppercase text-center ">101</div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="uppercase text-center ">Studio</div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="uppercase text-center ">7500000</div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="uppercase text-center ">
                        233D Phan Văn Trị, Phường 11, Quận Bình Thạnh
                      </div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="uppercase text-center ">
                        + 0395845912 Tin Vu + 0393913213 Hữu Phước
                      </div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="uppercase text-center ">Trống sẵn</div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="uppercase text-center ">còn</div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="text-center">14:55 12/10/2024</div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="uppercase text-center ">ah71_huentk</div>
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
    </div>
  );
};

export default RoomManagement;
