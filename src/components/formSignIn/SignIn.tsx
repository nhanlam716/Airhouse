import React, { useState } from "react";
import logoHeader from "../../assets/image/header-logo.svg";

import FormInput from "../formInput/FormInput";
import { ISignIn } from "../../models/data.model";
import Button from "../formButton/Button";
import ImageSignIn from "../formImage/ImageSignIn";
import { useFormik } from "formik";
import * as Yup from "yup";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../stores/store";
import { logInUser } from "../../stores/slices/authSlices";
import { toast } from "react-toastify";

const SignIn = ({ title }: ISignIn) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [passWordVisible, setPassWordVisible] = useState(false);

  const handlePassWord = () => {
    setPassWordVisible(!passWordVisible);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Địa chỉ email không hợp lệ")
        .required("Bạn phải nhập đầy đủ email"),
      password: Yup.string().required("Bạn phải nhập đầy đủ mật khẩu"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const resultAction = await dispatch(logInUser(values));
        if (resultAction?.payload) {
          localStorage.setItem("user", JSON.stringify(resultAction.payload));
          navigate("/roomList");
          resetForm();
        } else {
          toast.error("Thông tin đăng nhập chưa đúng");
          resetForm();
        }
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
  });
  return (
    <div className="flex">
      <div className="flex-[55%]">
        <div className="p-[24px] border-b-[1px] border-[#F0EFFB]">
          <img src={logoHeader} alt="logo" width={"80px"} height={"80px"} />
        </div>
        <div className="py-[40px] lg:py-[80px] px-[24px] lg:px-[160px] w-full flex justify-center text-left">
          <div className="w-full lg:w-auto">
            <h1 className="text-[32px] text-[#060029] font-bold">{title}</h1>
            <p className="text-[#060029] opacity-50 mb-[32px]">
              Vui lòng nhập thông tin để tiếp tục
            </p>
            <form
              className="w-full lg:w-[352px] flex flex-col gap-[16px]"
              onSubmit={formik.handleSubmit}
            >
              <div>
                <FormInput
                  label={"Email"}
                  type={"text"}
                  id={"email"}
                  placeholder={"airhouse@gmail.com"}
                  width="100%"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div style={{ color: "red" }}>
                    {String(formik.errors.email)}
                  </div>
                ) : null}
              </div>
              <div>
                <div className="relative">
                  <FormInput
                    label={"Mật khẩu"}
                    type={passWordVisible ? "text" : "password"}
                    id={"password"}
                    placeholder={"nhập mật khẩu"}
                    width="100%"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <button
                    type="button"
                    onClick={handlePassWord}
                    className="absolute top-[68%] right-3 transform -translate-y-1/2"
                  >
                    {passWordVisible ? (
                      <HiEyeOff className="w-5 h-5 text-gray-500" />
                    ) : (
                      <HiEye className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <div style={{ color: "red" }}>
                    {String(formik.errors.password)}
                  </div>
                ) : null}
              </div>
              <p className="text-[14px] text-[#0B0A0F] w-full text-center">
                <a href={"./ForgotPassword"}>Quên mật khẩu?</a>
              </p>
              <Button type="submit" button="Đăng nhập" />
            </form>
          </div>
        </div>
      </div>
      <ImageSignIn />
    </div>
  );
};

export default SignIn;
