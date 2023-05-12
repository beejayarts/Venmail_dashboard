import React from 'react'
import { BiSearch } from "react-icons/bi";

const RoleContentAdmin = () => {
  return (
    <div>
       <div className="mb-8">
        <h5 className="font-bold text-lg text-vengray">Administrator</h5>
        <p className="text-vengray text-base">
        The administrator has access to almost all features, except some critical organization-level operations.
        </p>
      </div>
      <div className="rolecontentTable">
        <div className="rolecontent_header flex  items-center justify-between">
          <button className='bg-venblue   duration-300 w-32 hover:bg-vengray rounded-full text-white text-base h-8'>+ Assign</button>
          <div className=" my-8 rounded-lg flex justify-between items-center  bg-[#F5F6FA] p-2">
          <input
            className=" bg-transparent border-0 outline-none"
            type="text"
            placeholder="Search Administrator"
          />{" "}
          <BiSearch className="text-[#5D5F69]" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default RoleContentAdmin