import React from "react";

const HeroSection = () => {
  return (
      <div className="w-10/12 max-w-[1080px] flex flex-col lg:flex-row justify-between mx-auto items-center mt-10">
        <div className="w-[50%] bottom-0">
          <p className="text-[35px]">Transforming education with SmartClas"</p>
          <p>Welcome to SmartClass:</p>
          <p>innovation classroom online platform.</p>
        </div>

        <div className="w-[50%] flex flex-row gap-3">
          <div className="bg-blue-500 h-[100px] w-[50%]">
            <p>ljgyh</p>
          </div>
          <div className="bg-blue-500 h-[100px] w-[50%]">
            <p>hjgjhg</p>
          </div>
        </div>
      </div>
  );
};

export default HeroSection;
