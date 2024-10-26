import React from "react";
import { Button, Heading2, Heading4 } from "../../../common";

export const Advantage = ({h2,h4,imgSrc,styles}) => {
  return (
    <div className={`flex gap-[200px] items-center py-[100px] ${styles?styles:''}`} >
      <div className="w-[50%]">
        <Heading2>{h2}</Heading2>
        <Heading4 styles={'pt-[24px] pb-[40px]'}>{h4}</Heading4>
        <Button>Learn More</Button>
      </div>
      <div className="w-[50%]">
        <img src={imgSrc} alt="" />
      </div>
    </div>
  );
};
