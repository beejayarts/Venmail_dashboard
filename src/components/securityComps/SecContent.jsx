import React, { useState } from "react";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import PrimaryActionsContent from "./PrimaryActionsContent";
import AllowedIpAddress from "./AllowedIpAddress";
import PasswordPolicy from "./PasswordPolicy";
import SuspiciousLogin from "./SuspiciousLogin";

const SecContent = () => {
  const [showSecBtns, setShowSecBtns] = useState(false);
  const [secPage, setSecPage] = useState(1)
  

  const handleSecPage=(n)=>{
    setSecPage(n)
    setShowSecBtns(false)
  }
  return (
    <div>
      <div className="overview_details mb-10 ">
        <h4 className="text-xl mb-4 font-bold text-vengray">Security</h4>
      </div>
      <div className="sec-tab relative w-full border-b mb-8 ">
        <button onClick={()=>handleSecPage(1)} className={`py-3 mr-10 text-vengray text-base hover:text-venblue duration-300 transition-all font-semibold ${secPage==1? 'border-venblue border-b-4':''}`}>
          Primary Actions
        </button>
        <button
          onClick={() => setShowSecBtns(!showSecBtns)}
          className={`text-vengray py-3 text-base hover:text-venblue ${secPage>1? 'border-venblue border-b-4':''} duration-300 transition-all font-semibold`}
        >
          <span className="flex gap-2 items-center">
            Secondary Actions
            <MdOutlineKeyboardArrowDown />
          </span>
        </button>
        {showSecBtns && (
          <div className="z-40 secondary_btns bg-white items-start top-16 p-4 rounded-lg justify-between shadow-xl min-h-36 absolute  left-32 w-[300px] flex flex-col">
            <button onClick={()=>handleSecPage(2)}
              className="hover:bg-[#F5F6FA] text-vengray text-base w-full p-4"
              type="button"
            >
              Allowed IP Addresses
            </button>
            <button onClick={()=>handleSecPage(3)}
              className="hover:bg-[#F5F6FA] text-vengray text-base w-full p-4"
              type="button"
            >
              Password Policy
            </button>
            <button onClick={()=>handleSecPage(4)}
              className="hover:bg-[#F5F6FA] text-vengray text-base w-full p-4"
              type="button"
            >
              Suspicious Login
            </button>
          </div>
        )}
      </div>
      <div className="sec_tab_content">
        {secPage==1 && <PrimaryActionsContent/>}
        {secPage==2 && <AllowedIpAddress/>}
        {secPage==3 && <PasswordPolicy/>}
        {secPage==4 && <SuspiciousLogin/>}
       



      </div>
    </div>
  );
};

export default SecContent;
