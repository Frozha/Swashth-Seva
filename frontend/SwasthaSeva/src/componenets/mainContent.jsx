import React from "react";
import MainText from "./mainText";
import BrowsePictures from "./BrowsePage";
export default function MainContent() {
  return (
    <div className=" bg-[#8cdcc8] h-screen w-screen flex flex-col  items-center">
      <div className="flex  justify-center overflow-x-hidden gap-4 ">
        <div className="mt-[30px] ">
          <MainText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </MainText>
          <MainText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </MainText>
        </div>
        <div className="mt-[30px]">
          <img src="./src/images/AI_healthcare.jpg" alt="Hello"></img>
        </div>
      </div>
      
    </div>
  );
}
