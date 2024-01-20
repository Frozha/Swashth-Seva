import React from "react";
import NavBar from "./Navbar";
import BrowseButton from "./BrowseButton";

export default function BrowsePage() {
  return (
    <div className="relative h-screen w-screen bg-[#8cdcc8]">
      <div className="flex w-screen h-[100px]  justify-between items-center bg-[#00a0a0]">
        <div className="flex  text-white text-[35px] font-black mx-auto">
          SWASTHA &ensp;SEVA
        </div>
      </div>
      <BrowseButton/>
    </div>
  );
}
