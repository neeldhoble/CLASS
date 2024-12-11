import React from "react";
import linkedin from "../assets/linkedin.png"
import insta from "../assets/insta.png"
import facebook from "../assets/facebook.png"
// import arrow from "../assets/arrow.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightDots, faFaceSmile, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";




const HeroSection = () => {
  return (
      <div className="w-10/12 max-w-[1080px] flex flex-col lg:flex-row justify-between mx-auto items-center mt-5">
        <div className="w-[50%] bottom-0 leading-none">
          <p className="text-[50px]">Transforming</p>
          <p className="text-[50px]">education with</p>
          <p className="text-[50px]">SmartClass <FontAwesomeIcon icon={faQuoteLeft} className="w-[20px]"/></p>
          <p className="mt-5">Welcome to SmartClass:</p>
          <p>innovation classroom online platform.</p>
        </div>

        <div className="w-[50%] flex flex-row gap-3">
          <div className="bg-[#9D72B3] h-[290px] w-[40%] p-4 rounded-[10px]">
            <div className="bg-white shadow-lg h-[100%]  shadow-lg shadow-black text-black flex flex-col relative">
              <p className="text-[20px] mx-auto mt-5 font-bold">Connect With Us</p>
              <p className="text-[14px] ml-3 mr-1">We’d love to hear from you! Whether you have questions or inquiries, feel free to reach out to us.</p>
              <p className="text-[10px] ml-3 mt-3">📧 Email Us: xyz@gmail.com</p>
              <p className="text-[10px] ml-3">📞 Call Us: +91 274656856</p>
              <div className="bg-black w-[90%] rounded-[30px] mt-8 mx-auto p-1 flex gap-2">
                <div className="flex gap-3 ml-4 mx-auto">
                    <img src={linkedin} alt="" className="w-[30px]"/>
                    <img src={facebook} alt="" className="w-[30px] ml-1"/>
                    <img src={insta} alt="" className="w-[40px]"/>
                </div>
              </div>
              

            </div>

            
            
          </div>
          <div className="bg-[#9D72B3] h-[290px] w-[60%] rounded-[10px] p-4">
            <div className="flex justify-between">
                <div className="border p-2 w-[60%] rounded-[10px]">
                  Opportunities
                </div>

                <div className="flex gap-1">
                      <div className="rounded-full border p-2 flex items-center justify-center">
                      <FontAwesomeIcon icon={faFaceSmile} className="border p-1 rounded-full"/>
                      </div>
                      
                      <div className="rounded-full border p-3 flex items-center justify-center">
                      <FontAwesomeIcon icon={faArrowUpRightDots} className="text-black"/>
                      </div>
                </div>
    
            </div>

            <h1 className="font-bold mt-8 text-[20px]">Embrace the Future</h1>
            <h1 className="font-bold text-[20px]">of Education</h1>
            <p className="text-[14px]">Our online Platform allowing to connect, collaborate, & thrive in a dynamic environment.</p>
          </div>
        </div>
      </div>
  );
};

export default HeroSection;
