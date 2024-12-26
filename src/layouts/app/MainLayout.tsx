import React from "react";
import MainContent from "./MainContent";

const MainLayout = () => {
  return (
    <>
      <div className="flex">
        <div className="w-full">
          <MainContent />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
