import React from "react";
import { MdClose } from "react-icons/md";

const PlanSummary = ({setNewUserModalPage,setSubPage}) => {
  return (
    <div className="bg-white rounded-xl w-[60%] h-[80vh] p-10">
      <div className="flex justify-between items-center mb-8">
        <h5 className=" text-2xl font-bold text-vengray">Add New Users</h5>{" "}
        <MdClose className="text-2xl cursor-pointer" onClick={()=>setSubPage('')} />
      </div>
      <div className="flex justify-between items-center mb-8">
        <h5 className=" text-2xl text-vengray">Plan summary</h5>
        <select className="w-32 P-8 focus:outline-none   rounded-lg bg-[#F5F6FA] border-2 border-[#C0C1C5]">
          <option>USD</option>
          <option>NGN</option>
          <option>EUR</option>
        </select>
      </div>
      <div className="mb-8">
        <label className="block text-vengray text-base">Number of users</label>
        <input
          className="w-full p-2 outline-none border-[#C0C1C5] rounded-md border-2"
          type="text"
          placeholder="Enter number of user"
        />
      </div>
      <div className="mb-8 flex justify-between items-end ">
        <div>
          <h6 className="text-lg font-bold text-vengray">Account type</h6>
          <p className="text-vengray text-base">Starter Plan</p>
        </div>
        <span className="text-venblue font-bold text-lg">$2/User/Month</span>
      </div>
      <div className="mb-8 flex justify-between items-end ">
        <div>
          <h6 className="text-lg font-bold text-vengray">Duration</h6>
          <div className="text-vengray flex gap-4 items-center">
            <div>
              <input id="monthly" name="duration" type="radio" />{" "}
              <label htmlFor="monthly">Monthly</label>
            </div>
            <div>
              <input defaultChecked onChange={console.log('hello')} id="yearly" name="duration" type="radio" />{" "}
              <label htmlFor="yearly">Yearly</label>
            </div>
          </div>
        </div>
        <span className="text-vengray font-semibold text-xl">$24/Year/User</span>
      </div>
      <div className="flex justify-end">
      <button onClick={()=>setNewUserModalPage(2)}
              className="text-sm w-48 bg-venblue py-2 px-4 text-white rounded-full cursor-pointer hover:scale-105 transition-all duration-300"
              type="button"
            >
              Continue
            </button>
      </div>
      
    </div>
  );
};

export default PlanSummary;
