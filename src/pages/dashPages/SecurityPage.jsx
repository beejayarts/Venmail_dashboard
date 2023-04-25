import React,{useState} from "react";

import OverviewContent from './../../components/securityComps/OverviewContent'
import RolesContent from './../../components/securityComps/RolesContent';
import SecurityContent from "../../components/securityComps/securityContent";
import SpamContent from "../../components/securityComps/spamContent";

const SecurityPage = () => {

  
  const [tabpage, setTabpage] = useState("overview");

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="text-2xl font-semibold text-vengray">
        Security & Compliance
      </div>
      <div className="  w-full flex gap-10  justify-between rounded-lg bg-[white] min-h-screen">
        <div className="pt-8 flex flex-col gap-10 security_tab  border-r-[1px] border-gray-200 w-[30%]">
          <button
            onClick={() => setTabpage("overview")}
          className={` w-full pl-8 text-left ${tabpage =="overview"? 'border-venblue border-l-4 text-venblue':'text-vengray'} transition-all text-lg hover:text-venblue duration-300`}
            type="button"
          >
            Overview
          </button>
          <button
            onClick={() => setTabpage("security")}
            className={` w-full pl-8 text-left ${tabpage =="security"? 'border-venblue border-l-4 text-venblue':'text-vengray'} text-lg hover:text-venblue transition-all duration-300`}
            type="button"
          >
            Security
          </button>
          <button
            onClick={() => setTabpage("roles")}
            className={` w-full ${tabpage =="roles"? 'border-venblue border-l-4 text-venblue':'text-vengray'}   pl-8 text-left text-lg hover:text-venblue transition-all duration-300`}
            type="button"
          >
            Roles
          </button>
          <button
            onClick={() => setTabpage("spam")}
            className={` w-full ${tabpage =="spam"? 'border-venblue border-l-4 text-venblue':'text-vengray'}  pl-8 text-left text-lg hover:text-venblue transition-all duration-300`}
            type="button"
          >
            Spam Control
          </button>
        </div>
        <div className="security_main_side pt-8 w-[65%] pr-8">
          {tabpage=='overview'&& <OverviewContent/>}
          {tabpage=='roles' && <RolesContent/>}
          {tabpage=='security' && <SecurityContent/>}
          {tabpage=='spam' && <SpamContent/>}
       
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
