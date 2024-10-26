import React from "react";

export const Heading3 = ({ children, styles }) => {
  return (
    <h3
      className={`text-[24px] text-grey font-space-mono font-[700] leading-[28px] tracking-[-1.071px] ${
        styles ? styles : ""
      }`}
    >
      {children}
    </h3>
  );
};
