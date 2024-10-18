import React from "react";
import card from "../../assets/image/sign-in-card.webp";
import bgCard from "../../assets/image/sign-in-bg.webp";

const ImageSignIn = () => {
  return (
    <>
      <div className="flex-[45%]">
        <div className="w-full h-screen bg-[#F7F7FD] shadow-[0px 4px 4px 0px rgba(0, 0, 0, 0.25)] relative py-[128px] px-[96px] hidden lg:block">
          <div className="bg-contain w-[300px] h-[300px] absolute top-0 left-0">
            <img src={bgCard} alt="" />
          </div>
          <div className="w-[456px] h-[514px] relative z-10">
            <img src={card} alt="card" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSignIn;
