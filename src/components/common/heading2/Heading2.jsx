import React from "react";

export const Heading2 = ({ children, styles, black = true }) => {
  return (
    <h2
      className={`text-[48px] font-space-mono font-[700] leading-[56px] tracking-[-2.5px] ${
        black ? "text-grey" : "text-white"
      } ${styles ? styles : ""}`}
    >
      {children}
    </h2>
  );
};
