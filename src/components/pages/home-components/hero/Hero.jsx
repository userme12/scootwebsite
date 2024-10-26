import React from "react";
import { Button, Heading1, Heading4 } from "../../../common";

export const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(/images/hero.png)` }}
      className="bg-no-repeat bg-cover"
    >
      <div className="bg-[#2F3B59] bg-opacity-[0.75] py-[152px]">
        <div className="container">
          <Heading1 styles={'w-[50%]'}>Scooter sharing made simple</Heading1>
          <div className="ml-[95px] w-[38%]">
            <Heading4 styles={"text-white my-[40px]"}>
              Scoot takes the hassle out of urban mobility. Our bikes are placed
              in convenient locations in each of our cities. Use our app to
              locate the nearest bike, unlock it with a tap, and you’re away!
            </Heading4>
            <Button>Get Scootin</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
