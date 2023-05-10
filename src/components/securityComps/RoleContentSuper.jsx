import React, {useState} from "react";
import ChangeAdminModal from "./ChangeAdminModal";

const RoleContentSuper = () => {
    const [adminModal, setAdminModal] = useState(false)
  return (
    <div>
      <div className="mb-8">
        <h5 className="font-bold text-lg text-vengray">Super Administrator</h5>
        <p className="text-vengray text-base">
          The Super Administrator has full access to all the features across the
          organization.
        </p>
      </div>
      <div className="profile_details flex items-center gap-8 mb-8">
        <div className="bg-[#7A8BFF] text-white text-2xl w-12 h-12 p-4 rounded-full flex items-center justify-center">
          JP
        </div>
        <div>
          <h6 className="text-lg text-vengray font-bold">Jane Palley</h6>
          <p className="text-base text-vengray ">admin@palleypetals.com</p>
        </div>
      </div>
      <div className="bg-[#F5F6FA] w-full p-6 mb-8">
        <p className="text-vengray text-base">
          <span className="font-bold">Note:</span> The Super Administrator has
          the utmost privilege across the organization. Only you can transfer
          this role to any one of the other administrators in your organization.
        </p>
      </div>
      <button onClick={()=>setAdminModal(true)} className="w-1/2 cursor-pointer hover:scale-105 transition-all duration-300 h-10 px-6 font-semibold rounded-full bg-venblue text-white">
        Change Super Administrator
      </button>
      {/* Change admin popup */}
      {adminModal && <ChangeAdminModal setAdminModal={setAdminModal} title='Change Super Administrator' btnTitle='Make super admin'/> }
      
    </div>
  );
};

export default RoleContentSuper;
