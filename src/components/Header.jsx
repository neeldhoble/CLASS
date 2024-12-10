import React from "react";
import abc from "../assets/ABC.jpg"

const Header = () => {
  return (
    <div className="w-10/12 max-w-[1080px] flex flex-col lg:flex-row justify-between mx-auto items-center mt-5">
      <div>hvgv</div>
      <div className="w-[50%] flex flex-row">
        <div className="w-[50%]">lkhfhebf</div>
        <div className="w-[50%]"><img src={abc} alt="abc"className="rounded-lg"/></div>
      </div>
    </div>
  );
};

export default Header;
