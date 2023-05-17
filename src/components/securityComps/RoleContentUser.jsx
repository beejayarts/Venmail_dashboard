import React,{useState} from 'react'
import { BiSearch } from "react-icons/bi";
import ChangeAdminModal from './ChangeAdminModal'

const RoleContentUser = () => {
  const[adminModal, setAdminModal] = useState(false)
  return (
    <div>
      <div className="mb-8">
        <h5 className="font-bold text-lg text-vengray">User Management Admin</h5>
        <p className="text-vengray text-base">
        Privileges to manage organization users. They can manage user-level operations like deleting users, configuring user settings, and changing passwords.
        </p>
      </div>
      <div className="rolecontentTable">
        <div className="rolecontent_header flex  items-center justify-between">
          <button onClick={()=>setAdminModal(true)} className="bg-venblue   duration-300 w-32 hover:bg-vengray rounded-full text-white text-base h-8">
            + Assign
          </button>
          <div className=" my-8 rounded-lg flex justify-between W-1/2 px-4 items-center  bg-[#F5F6FA] p-2">
            <input
              className=" bg-transparent border-0 outline-none"
              type="text"
              placeholder="Search Administrator"
            />{" "}
            <BiSearch className="text-[#5D5F69]" />
          </div>
        </div>
        <table className="min-w-full divide-y divide-gray-200  border border-gray-200">
          <thead className="bg-[#A2A3A9] px-2">
            <tr className="px-8">Assigned Users</tr>
          </thead>
          <tbody>
            <tr>
              <td>No users placed here yet</td>
            </tr>
          </tbody>
        </table>
           {/* Change admin popup */}
      {adminModal && <ChangeAdminModal setAdminModal={setAdminModal} title='Assign User Management Admin' btnTitle='Make User admin'/> }
      </div>
    </div>
  )
}

export default RoleContentUser