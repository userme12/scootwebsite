import React from "react";

export const Heading1 = ({ children, styles }) => {
  return (
    <h1
      className={`text-[56px] text-white font-space-mono font-[700] leading-[48px] tracking-[-2.143px] ${
        styles ? styles : ""
      }`}
    >
      {children}
    </h1>
  );
};
