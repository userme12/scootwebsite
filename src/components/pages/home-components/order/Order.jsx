import React from "react";
import { Heading3, Heading4 } from "../../../common";

export const Order = () => {
  return (
    <div className="flex gap-[30px] pt-[160px] pb-[100px] relative">
      <div className="flex flex-col gap-[33px] justify-start items-start">
        <img src="/images/locate.svg" alt="" />
        <Heading3>Locate with app</Heading3>
        <Heading4>
          Use the app to find the nearest scooter to you. We are continuously
          placing scooters in the areas with most demand, so one should never be
          too far away.
        </Heading4>
      </div>
      <div className="flex flex-col gap-[33px] justify-start items-start">
        <img src="/images/pick.svg" alt="" />
        <Heading3>Locate with app</Heading3>
        <Heading4>
          Use the app to find the nearest scooter to you. We are continuously
          placing scooters in the areas with most demand, so one should never be
          too far away.
        </Heading4>
      </div>
      <div className="flex flex-col gap-[33px] justify-start items-start">
        <div className={`h-[8px] w-[100%] border-2 bg-grey-2 z-[-1] absolute left-[-28%] top-[38%]`}></div>
        <img src="/images/enjoy.svg" alt="" />
        <Heading3>Locate with app</Heading3>
        <Heading4>
          Use the app to find the nearest scooter to you. We are continuously
          placing scooters in the areas with most demand, so one should never be
          too far away.
        </Heading4>
      </div>
    </div>
  );
};
