import React from 'react'

export const Heading4 = ({children,styles}) => {
  return (
    <p className={`text-[15px] text-grey-1 font-lexend font-[400] leading-[25px] ${
      styles ? styles : ""
    }`}>{children}</p>
  )
}
