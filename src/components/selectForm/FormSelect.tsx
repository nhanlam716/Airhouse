import React from "react";
import Select from "./Select";
import { CHARACTERISTIC, PRICES, ROOMTYPE } from "../../constants/select";

const FormSelect = () => {
  return (
    <>
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
      <Select title="Đặc điểm">
        {CHARACTERISTIC.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </Select>
    </>
  );
};

export default FormSelect;
