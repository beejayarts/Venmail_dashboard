import React from "react";

import workman from "./../../assets/images/workman.png";
import { FiGlobe } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { RiPagesLine } from "react-icons/ri";

const DashboardPage = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="text-2xl font-semibold text-vengray">Dashboard</div>
      <div className="welcome_board w-full bg-[#ECECF5] p-6 rounded-lg flex items-center justify-between">
        <div className="welcome_board_left flex items-center gap-8">
          <img src={workman} alt="workman model" className="object-cover" />{" "}
          <div className="wb_left_content">
            <h5 className="text-2xl text-vengray font-semibold">
              Welcome Jane Palley
            </h5>
            <p className="text-vengray text-base">
              <span className="font-bold">Email:</span> admin@palleypetals.com |{" "}
              <span className="font-bold">Role:</span> Super Admin
            </p>
          </div>
        </div>
        <div className="welcome_board_right flex flex-col gap-2">
          <div className="text-vengray">
            {" "}
            <h6 className="text-base font-bold">Plan: Starter Plan</h6>
            <p className="text-sm">Renewal Date: Dec 23, 2023</p>
          </div>
          <div className="flex gap-2">
            <button
              className="text-sm  bg-venblue py-2 px-4 text-white rounded-full cursor-pointer hover:scale-105 transition-all duration-300"
              type="button"
            >
              Renew Plan
            </button>
            <button
              className="text-sm   text-venblue font-bold cursor-pointer hover:scale-105 transition-all duration-300"
              type="button"
            >
              Upgrade Plan
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-4 dashcards">
        <div className="domain_card w-1/3 bg-white p-6 rounded-lg flex items-center gap-4">
          <FiGlobe className="text-4xl bg-[#F5F6FA] rounded-full p-2 text-venblue" />{" "}
          <div className="text-vengray">
            <p className="text-lg">Domains</p>
            <h6 className="text-lg font-bold">1</h6>
          </div>
        </div>
        <div className="domain_card w-1/3 bg-white p-6 rounded-lg flex items-center gap-4">
          <AiOutlineUser className="text-4xl bg-[#F5F6FA] rounded-full p-2 text-[#FDA152]" />{" "}
          <div className="text-vengray">
            <p className="text-lg">Users</p>
            <h6 className="text-lg font-bold">2</h6>
          </div>
        </div>
        <div className="domain_card w-1/3 bg-white p-6 rounded-lg flex items-center gap-4">
          <RiPagesLine className="text-4xl bg-[#F5F6FA] rounded-full p-2 text-[#36AC65]" />{" "}
          <div className="text-vengray">
            <p className="text-lg">License</p>
            <h6 className="text-lg font-bold">10</h6>
          </div>
        </div>
      </div>
    </div>
  );

};

export default DashboardPage;
