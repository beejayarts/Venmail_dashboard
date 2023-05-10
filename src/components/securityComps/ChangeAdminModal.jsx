import React from "react";
import { BiSearch } from "react-icons/bi";

const ChangeAdminModal = ({ title, btnTitle, setAdminModal }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-[100vh] flex items-center justify-center bg-[rgba(0,0,0,.5)]">
      <div className="bg-white p-8 rounded-lg min-h-[55vh] w-[40%]">
        <h5 className="text-xl text-vengray font-bold">{title}</h5>
        <div className=" my-8 rounded-lg flex justify-between items-center w-full bg-[#F5F6FA] p-2">
          <input
            className="w-[80%] bg-transparent border-0 outline-none"
            type="text"
            placeholder="Search users"
          />{" "}
          <BiSearch className="text-[#5D5F69]" />
        </div>
        <div className="flex justify-between items-center mb-12">
          <div className="profile_details flex items-center gap-8 ">
            <div className="bg-[#7A8BFF] text-white text-2xl w-12 h-12 p-4 rounded-full flex items-center justify-center">
              JP
            </div>
            <div>
              <h6 className="text-lg text-vengray font-bold">Jane Palley</h6>
              <p className="text-base text-vengray ">admin@palleypetals.com</p>
            </div>
          </div>
          <button className="border border-venblue rounded-md p-2 text-venblue hover:bg-venblue hover:text-white duration-300  ">
            {btnTitle}
          </button>
        </div>
        <div className=" flex gap-4 mt-4 justify-end">
        <button onClick={()=>setAdminModal(false)} className="transition-all  duration-300 hover:bg-venblue hover:text-white h-10 px-6 font-semibold rounded-full  text-venblue border border-venblue">
            Cancel
          </button>
          <button
          
            className=" cursor-pointer hover:scale-105 transition-all duration-300 h-10 px-6 font-semibold rounded-full bg-venblue text-white"
          >
            Assign
          </button>
       
        </div>
      </div>{" "}
    </div>
  );
};

export default ChangeAdminModal;
