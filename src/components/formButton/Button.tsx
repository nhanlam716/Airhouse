import React from "react";
import { ISignIn } from "../../models/data.model";

const Button = ({ button }: ISignIn) => {
  return (
    <>
      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-slate-900 text-[#fff] h-10 px-4 py-2">
        {button}
      </button>
    </>
  );
};

export default Button;
