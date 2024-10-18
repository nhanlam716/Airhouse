import React from "react";
import cardSignIn from "../../assets/image/sign-in-card.webp";
import Register from "../../pages/register/Register";

const Account = () => {
  return (
    <div>
      <div className="flex h-screen">
        <div className="w-full flex-[55%]">
          <Register />
        </div>
        <div className="w-full flex-[45%] flex justify-center items-center bg-[#f5f2f2] relative">
          <div className="bg-[url('./assets/image/sign-in-bg.webp')] bg-contain absolute w-[300px] h-[300px] top-0 left-0 "></div>
          <div className="w-[456px] h-[514px] relative z-10 ">
            <img src={cardSignIn} alt="card" className="max-w-full " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
