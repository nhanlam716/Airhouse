import React, { useEffect, useState } from "react";
import HeaderContent from "./HeaderContent";
import { SELECTDAY } from "../../constants";
import FormInput from "../../components/formInput/FormInput";
import Select from "../../components/selectForm/Select";
import { Button } from "flowbite-react";
import FormSelect from "../../components/selectForm/FormSelect";
import { axiosClient } from "../../api/axiosClient";

interface IProducts {
  date: string;
  thumbnail: string[];
  room: string;
  price: number;
  description: string;
  address: string;
  status: string;
  image: string;
}
const MainContent = () => {
  const [data, setData] = useState<IProducts[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res: any = await axiosClient.get("/roomLists");
        setData(res);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <>
        <HeaderContent title="Danh sách phòng trống" />
        <div className="bg-slate-50">
          <div className="col-start-1 lg:col-start-2 col-end-3 row-start-2 row-end-4 p-[16px] lg:p-[24px] overflow-hidden relative">
            <div className="font-bold flex items-center gap-[5px] text-[11px] lg:text-[16px]">
              <p>Số lượng phòng đã được lock trong</p>
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {SELECTDAY.map((item, index) => (
                  <option key={index}>{item.value}</option>
                ))}
              </select>
              <p>: 34 phòng</p>
            </div>
          </div>
          <div className="flex gap-4 px-5">
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
          <div className="w-full mt-7 px-1">
            <div className="rounded-[8px] border">
              <div className="py-[24px] px-[16px] flex items-center justify-between border-b-[1px]">
                <div>
                  <p className="text-[#6C727F] opacity-50">
                    Tổng số phòng đang trống
                  </p>
                  <p className="text-[#060029] font-bold">{data.length}</p>
                </div>
                <hr className="w-[40px] rotate-90" />
                <div>
                  <p className="text-[#6C727F] opacity-50">
                    Giá phòng thấp nhất
                  </p>
                  <p className="text-[#060029] font-bold">
                    {Math.min(...data.map((item) => item.price)).toLocaleString(
                      "vi-VN"
                    )}{" "}
                    VND
                  </p>
                </div>
                <hr className="w-[40px] rotate-90" />
                <div>
                  <p className="text-[#6C727F] opacity-50">
                    Giá phòng cao nhất
                  </p>
                  <p className="text-[#060029] font-bold">
                    {Math.max(...data.map((item) => item.price)).toLocaleString(
                      "vi-VN"
                    )}{" "}
                    VND
                  </p>
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
                        <td className="h-12 px-4 text-left align-middle [&:has([role=checkbox])]:pr-0 text-[#060029] font-bold">
                          Lần cập nhật cuối
                        </td>
                        <td className="h-12 px-4 text-left align-middle [&:has([role=checkbox])]:pr-0 text-[#060029] font-bold">
                          Thông tin phòng
                        </td>
                        <td className="h-12 px-4 text-left align-middle [&:has([role=checkbox])]:pr-0 text-[#060029] font-bold"></td>
                      </tr>
                    </thead>
                    <tbody className="[&_tr:last-child]:border-0">
                      {data.map((item, index) => (
                        <tr
                          key={index}
                          className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                        >
                          <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="capitalize">{item?.date}</div>
                          </td>
                          <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                            <div>
                              <div className="capitalize flex gap-[16px]">
                                <div>
                                  <img
                                    src={item?.image}
                                    alt="..."
                                    style={{
                                      borderRadius: "6px",
                                      objectFit: "cover",
                                      width: "115px",
                                      height: "100px",
                                      cursor: "zoom-in",
                                    }}
                                  />
                                </div>
                                <div>
                                  <div>
                                    <div className="text-white w-fit rounded-[4px] py-[2px] px-[4px] bg-[#FFB154]">
                                      {" "}
                                      {item?.room}
                                    </div>
                                  </div>
                                  <div>
                                    <span className="text-[#F06565]">
                                      {item?.price.toLocaleString()} VND {""}
                                    </span>
                                    <span>{item?.description}</span>
                                  </div>
                                  <div>{item?.address}</div>
                                  <div>{item?.status}</div>
                                </div>
                              </div>
                              <div className="flex gap-[6px] mt-[6px] items-center">
                                {item?.thumbnail &&
                                  item?.thumbnail.map(
                                    (item: any, index: any) => (
                                      <div key={index}>
                                        <div className=" block">
                                          <img
                                            src={item}
                                            alt=""
                                            style={{
                                              borderRadius: "4px",
                                              objectFit: "cover",
                                              width: "40px",
                                              height: "40px",
                                              cursor: "zoom-in",
                                            }}
                                          />
                                        </div>
                                        {/* <div className="w-[40px] h-[40px] flex items-center justify-center rounded-[4px] bg-[#F4F4F6] text-[10px] cursor-pointer text-center">
                                          Xem thêm
                                        </div> */}
                                      </div>
                                    )
                                  )}
                              </div>
                            </div>
                          </td>
                          <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="flex justify-end gap-[6px]">
                              <Button color="dark">Báo lock</Button>
                              <Button color="light">Yêu thích</Button>
                              <Button color="light">Xem chi tiết</Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {/* <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          <div className="capitalize">16:06 11/10/2024</div>
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          <div>
                            <div className="capitalize flex gap-[16px]">
                              <div>
                                <img
                                  src="https://d387kigxse9goe.cloudfront.net/rooms/1728637580420-757-1.jpg"
                                  alt="..."
                                  style={{
                                    borderRadius: "6px",
                                    objectFit: "cover",
                                    width: "115px",
                                    height: "100px",
                                    cursor: "zoom-in",
                                  }}
                                />
                              </div>
                              <div>
                                <div>
                                  <div className="text-white w-fit rounded-[4px] py-[2px] px-[4px] bg-[#FFB154]">
                                    {" "}
                                    phòng pass
                                  </div>
                                </div>
                                <div>
                                  <span className="text-[#F06565]">
                                    3,600,000 VND
                                  </span>
                                  <span>18 m2 Studio Cửa sổ hành lang</span>
                                </div>
                                <div>
                                  702/60/5 Lê Đức Thọ, Phường 15, Quận Gò Vấp
                                </div>
                                <div>Trống sẵn</div>
                              </div>
                            </div>
                            <div className="flex gap-[6px] mt-[6px] items-center">
                              <div className="hidden">
                                <img
                                  src="https://d387kigxse9goe.cloudfront.net/rooms/1728637580420-757-1.jpg"
                                  alt=""
                                  style={{
                                    borderRadius: "4px",
                                    objectFit: "cover",
                                    width: "40px",
                                    height: "40px",
                                    cursor: "zoom-in",
                                  }}
                                />
                              </div>
                              <div className=" block">
                                <img
                                  src="https://d387kigxse9goe.cloudfront.net/rooms/1728637580420-757-1.jpg"
                                  alt=""
                                  style={{
                                    borderRadius: "4px",
                                    objectFit: "cover",
                                    width: "40px",
                                    height: "40px",
                                    cursor: "zoom-in",
                                  }}
                                />
                              </div>
                              <div className=" block">
                                <img
                                  src="https://d387kigxse9goe.cloudfront.net/rooms/1728637580420-757-1.jpg"
                                  alt=""
                                  style={{
                                    borderRadius: "4px",
                                    objectFit: "cover",
                                    width: "40px",
                                    height: "40px",
                                    cursor: "zoom-in",
                                  }}
                                />
                              </div>
                              <div className="w-[40px] h-[40px] flex items-center justify-center rounded-[4px] bg-[#F4F4F6] text-[10px] cursor-pointer text-center">
                                Xem thêm
                              </div>
                              <div>
                                <img
                                  src="https://d387kigxse9goe.cloudfront.net/rooms/1728637580420-757-1.jpg"
                                  alt=""
                                  style={{
                                    borderRadius: "4px",
                                    objectFit: "cover",
                                    width: "40px",
                                    height: "40px",
                                    cursor: "zoom-in",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          <div className="flex justify-end gap-[6px]">
                            <Button color="dark">Báo lock</Button>
                            <Button color="light">Yêu thích</Button>
                            <Button color="light">Xem chi tiết</Button>
                          </div>
                        </td>
                      </tr>
                      */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default MainContent;
