import React from "react";
import MainText from "./mainText";
import BrowsePictures from "./BrowsePage";
export default function MainContent() {
  return (
    <div className=" bg-[#8cdcc8] h-screen w-screen flex flex-col  items-center">
      <div className="flex  justify-center overflow-x-hidden gap-4 ">
        <div className="mt-[80px] ">
          <MainText>
            <h1 className="text-[50px] text-white font-mono font-black" style={{ color: '#f0ffff' }}>EMPOWERING TOMORROWS</h1>
            <h1 className="-mt-[10px] text-[40px] text-white font-mono font-black" style={{ color: '#f0ffff' }}>HEALTHCARE</h1>
            AI-driven radiology analysis with personalized health insights, ensuring precise diagnostics, clear reports, and 
            scalable, sustainable solutions for hospitals and individuals
          </MainText>
          <MainText>
          Our AI models work seamlessly with medical professionals to provide accurate and rapid assessments, 
          aiding in early detection and precise diagnosis.
          Explore the possibilities of AI-enhanced medical imaging. We offer state-of-the-art technology that transforms MRI analysis, 
          setting new standards for efficiency and reliability.
          </MainText>
        </div>
        <div className="mt-[70px] w-[650px] h-[400px] rounded-md overflow-hidden" >
          <img src="./src/images/AI_healthcare.jpg" alt="Hello" className="object-cover rounded-md"></img>
        </div>
      </div>
      
    </div>
  );
}
