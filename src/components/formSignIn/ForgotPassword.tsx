import React from "react";
import logoHeader from "../../assets/image/header-logo.svg";
import { ISignIn } from "../../models/data.model";
import FormInput from "../formInput/FormInput";
import Button from "../formButton/Button";
import ImageSignIn from "../formImage/ImageSignIn";

const ForgotPassword = ({ title }: ISignIn) => {
  return (
    <>
      <div className="flex">
        <div className="flex-[55%]">
          <div className="p-[24px] border-b-[1px] border-[#F0EFFB]">
            <img src={logoHeader} alt="logo" width={"80px"} height={"80px"} />
          </div>
          <div className="py-[40px] lg:py-[80px] px-[24px] lg:px-[160px] w-full flex justify-center text-left">
            <div className="w-full lg:w-auto">
              <h1 className="text-[32px] text-[#060029] font-bold">{title}</h1>
              <form className="w-full lg:w-[352px] flex flex-col gap-[16px]">
                <FormInput
                  label={"Email"}
                  type={"text"}
                  id={"email"}
                  placeholder={"airhouse@gmail.com"}
                  width="100%"
                />
                <p className="text-[14px] text-[#0B0A0F] w-full text-left">
                  <a href={"./register"}>Quay lại Đăng nhập</a>
                </p>
                <Button button="Lấy lại mật khẩu" />
              </form>
            </div>
          </div>
        </div>
        <ImageSignIn />
      </div>
    </>
  );
};

export default ForgotPassword;
