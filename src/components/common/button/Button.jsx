import React from "react";

export const Button = ({ children, styles, padding }) => {
  return (
    <button
      className={`text-[15px] text-white font-[700] font-space-mono leading-[25px] bg-yellow py-[14px] border-[3px] border-transparent hover:text-yellow hover:bg-transparent hover:border-yellow ${
        padding == 44 ? "px-[44.5px]" : "px-[39px]"
      } ${styles ? styles : ""}`}
    >
      {children}
    </button>
  );
};
