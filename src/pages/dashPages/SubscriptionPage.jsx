import React,{useState} from "react";

import AddNewUserModal from "../../components/AddNewUserModal";

const SubscriptionPage = ({setActiveMenu}) => {

  const [subPage, setSubPage] = useState('');

  return (
    <div className="w-full flex flex-col gap-4 ">
      <div className="text-2xl font-semibold text-vengray">Subscriptions</div>
      <div className="bg-white p-8 w-full rounded-lg min-h-[80vh]">
        <h5 className="text-2xl font-semibold text-vengray">Domains</h5>
        <div className="starter_plan_card p-8 border-venblue border w-3/5 rounded-xl my-8">
          <h6 className="font-semibold text-xl">STARTER-PLAN: $2/Month/User</h6>
          <p>Domain: palleypetal.com</p>
          <p>License Count: 10</p>
          <p>Users Added: 2</p>
          <p className="text-venblue font-semibold">
            Renewal Date: Dec 23, 2023
          </p>
          <div className="starter_plan_btns flex gap-4 mt-4">
            <button onClick={()=>{setSubPage('newuser')}} className="w-1/2 cursor-pointer hover:scale-105 transition-all duration-300 h-10 px-6 font-semibold rounded-full bg-venblue text-white">
              Add new user
            </button>
            <button className="transition-all w-1/2 duration-300 hover:bg-venblue hover:text-white h-10 px-6 font-semibold rounded-full  text-venblue border border-venblue">
              Transaction history
            </button>
          </div>
        </div>
        {subPage == 'newuser' && <AddNewUserModal setActiveMenu={setActiveMenu} setSubPage={setSubPage}/> }
        {/* Other plans */}
        <div className="other_plans">
          <h6>Other plans</h6>
          <p>
            You can upgrade to other Venmail plans for more amazing workspace
            experience.
          </p>
          <div className="other_plans_container w-full flex mt-8 gap-10">
            {/* Pro plan card */}
            <div className="pro_plan min-h-[70vh] w-1/3 flex flex-col items-center justify-center gap-6 px-4 py-8 bg-venblue rounded-xl">
              <div className="pro_header mb-4 text-center">
                <h6 className="text-[#44FFD2] font-bold text-base text-center">
                  Most Popular
                </h6>
                <h4 className="text-center text-white my-2 font-semibold text-2xl">
                  PRO-PLAN
                </h4>
                <p className="text-[#F5F6FA]">Starting at</p>
              </div>
              <div className="pro_price text-center text-xl text-white">
                <span className="text-3xl font-bold">$1.5/</span>Month/User
              </div>
              <div className="plan_features w-[70%] py-6  mx-auto  border-t-2 border-b-2 border-[#A5C1ED]">
                <ul className=" text-white text-sm font-regular flex flex-col gap-2">
                  <li>11-50 users</li>
                  <li>20gig per user</li>
                  <li>custom business email</li>
                  <li>smart spam protection</li>
                  <li>auto-followup enabled</li>
                  <li>email password protection</li>
                </ul>
              </div>
              <button className=" w-40 cursor-pointer hover:scale-105 transition-all duration-300 h-10 px-6 font-semibold rounded-full bg-white text-venblue">
                upgrade plan
              </button>
            </div>
            {/* mega plan */}
            <div className="pro_plan min-h-[70vh] w-1/3 flex flex-col items-center justify-center gap-6 px-4 py-8 bg-[#F5F6FA] border-t-4 border-venblue rounded-xl">
              <div className="pro_header mb-4 text-center">
                <h4 className="text-center text-vengray my-2 font-semibold text-2xl">
                  MEGA-PLAN
                </h4>
                <p className="text-vengray">Starting at</p>
              </div>
              <div className="pro_price text-center text-xl text-vengray">
                <span className="text-3xl font-bold">$1.2/</span>Month/User
              </div>
              <div className="plan_features w-[70%] py-6  mx-auto  border-t-2 border-b-2 border-[#A5C1ED]">
                <ul className=" text-vengray text-sm font-regular flex flex-col gap-2">
                  <li>51 users and above</li>
                  <li>30gig per user</li>
                  <li>custom business email</li>
                  <li>smart spam protection</li>
                  <li>auto-followup enabled</li>
                  <li>email password protection</li>
                </ul>
              </div>
              <button className=" w-40 cursor-pointer border border-venblue hover:scale-105 transition-all duration-300 h-10 px-6 font-semibold rounded-full bg-[#F5F6FA] text-venblue">
                upgrade plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
