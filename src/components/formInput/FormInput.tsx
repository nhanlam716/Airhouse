import React from "react";
import { ISignIn } from "../../models/data.model";

const FormInput = ({
  id,
  label,
  placeholder,
  type,
  width,
  height,
}: ISignIn) => {
  return (
    <>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#060029]"
        >
          {label}
        </label>
        <div className="relative">
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            style={{ width, height }}
            className="flex h-10 rounded-md border border-[#D3D5DA] bg-[#ddd8d8] px-[16px] py-[12px] text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D3D5DA] focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 min-w-[150px]"
          />
        </div>
        <p className="text-sm text-muted-foreground"></p>
      </div>
    </>
  );
};

export default FormInput;
