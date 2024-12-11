import React from "react";
import abc from "../assets/edu.avif"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import video from "../assets/video.avif"


const Header = () => {
  return (
    <div className="w-10/12 max-w-[1080px] flex flex-col lg:flex-row justify-between mx-auto  mt-5">
      <div className="flex flex-row h-[35px] justify-between gap-40 relative">
              <div className="flex flex-row gap-2 h-[35px]">
                  <div className="bg-white text-black p-1 rounded-lg">
                    SmartClass 
                  </div>
                  <div className="bg-white text-black p-1 rounded-lg">
                      menu <FontAwesomeIcon icon={faArrowDown} className="text-black"/>
                  </div>
                  <div className="border rounded-lg w-[100px]">

                  </div>
              </div>

              <div className="flex flex-row gap-2 text-white items-center">
                  <FontAwesomeIcon icon={faCircleChevronLeft}/>
                  <FontAwesomeIcon icon={faCircleChevronRight}/>
              </div>

              <div className="absolute w-[150px] right-0 top-60">
                <p className="absolute bg-white text-black p-1 rounded-lg ml-1 mt-1">video lesson</p>
                <p className="absolute bg-gray-400 right-6 bottom-2 w-[50px] flex items-center justify-center rounded-lg">...</p>
                <img src={video} alt="" />
                
              </div>
      </div>



      <div className="w-[50%] flex flex-row gap-3 relative">
        {/* <div className="w-[50%] border">lkhfhebf</div> */}
        <div className="rounded-[30px]"><img src={abc} alt="abc"className="rounded-[30px]"/></div>
        <div className="absolute top-[300px] left-5 leading-7 font-bold text-[28px]">
          <p>Explore all benefits</p>
          <p>of SmartClass</p>
        </div>
        <div className="border p-2 font-bold text-[20px] absolute rounded-[20px] rotate-12 top-40 right-0">
          Real-time class
        </div>
        <div className="border p-2 text-[20px] absolute rounded-[20px] top-72 right-14 rotate-1 font-bold">
          interactive
        </div>

        <div className="border p-2 text-[20px] absolute rounded-[20px] top-60 right-32 -rotate-12 font-bold">
            Multimedia
        </div>

        <div  className="border p-1 absolute rounded-full bottom-5 right-2 font-bold">
        <FontAwesomeIcon icon={faCircleChevronRight}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
