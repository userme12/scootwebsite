import React from "react";
import { Heading2, Heading3, Heading4 } from "../../common";
import { Apple, Facebook, GooglePlay, Instagram, Twitter } from "../../common";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="bg-grey py-[102px]">
        <div className="flex justify-between items-center container">
          <Heading2 black={false} styles={"w-[40%]"}>
            Sign up and Scoot off today
          </Heading2>
          <div className="flex gap-[18px]">
            <div className="bg-[#E5ECF4] flex items-center py-[8px] px-[15px] gap-[12px] rounded-[4px]">
              <Apple />
              <div>
                <span className="text-[10px] text-grey font-[700] font-space-mono tracking-[-0.446px]">
                  Available on the
                </span>
                <Heading3>AppStore</Heading3>
              </div>
            </div>
            <div className="bg-[#E5ECF4] flex items-center py-[8px] px-[15px] gap-[12px] rounded-[4px]">
              <GooglePlay />
              <div>
                <span className="text-[10px] text-grey font-[700] font-space-mono tracking-[-0.446px]">
                  Get it on
                </span>
                <Heading3>GooglePlay</Heading3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#333A44] py-[32px]">
        <div className="container flex items-center justify-between">
          <Link to='/'><Heading2 black={false}>scoot</Heading2></Link>
          <ul className="flex gap-[32px]">
            <li>
              <Link to='/about'>
                <Heading4>About</Heading4>
              </Link>
            </li>
            <li>
              <Link to='/location'>
                <Heading4>Location</Heading4>
              </Link>
            </li>
            <li>
              <Link to='/careers'>
                <Heading4>Careers</Heading4>
              </Link>
            </li>
          </ul>
          <ul className="flex gap-[20px]">
            <li>
              <a href="https://www.facebook.com/" target='_blank'><Facebook styles={'hover:fill-grey-2'}/></a>
            </li>
            <li>
              <a href="https://www.twitter.com/" target='_blank'><Twitter styles={'hover:fill-grey-2'}/></a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target='_blank'><Instagram styles={'hover:fill-grey-2'}/></a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
// sudheer
