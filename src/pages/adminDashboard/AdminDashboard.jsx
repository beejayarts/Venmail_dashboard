import React, { useState } from "react";
import "../adminDashboard/admindashboard.css";
import logo from "./../../assets/images/VenMail_logo.png";
// Dashboard menu icons
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineNotifications } from "react-icons/md";
import { BiEnvelope } from "react-icons/bi";
import { RiDashboardLine } from "react-icons/ri";
import { FiGlobe } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { MdBusiness } from "react-icons/md";
import { RiMailSettingsLine } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";
import { BiLogOutCircle } from "react-icons/bi";
import { AiOutlineSafety } from "react-icons/ai";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

// Dashboard pages import
import DashboardPage from "../dashPages/DashboardPage";
import DomainsPage from "../dashPages/DomainsPage";
import AccountPage from "../dashPages/AccountPage";
import MailSettingsPage from "../dashPages/MailSettingsPage";
import SecurityPage from '../dashPages/SecurityPage';
import OrganizationPage from '../dashPages/OrganizationPage';
import UsersPage from '../dashPages/UsersPage';
import SubscriptionPage from '../dashPages/SubscriptionPage';


const AdminDashboard = () => {
  const [activeMenu, setActiveMenu] = useState(1);

  return (
    <div className="admin_dashboard_container">
      <header className="w-full h-20 bg-white flex items-center">
        {/* Top Navbar */}
        <nav className="w-[85%] mx-auto flex items-center justify-between">
          <div className="dash_branding">
            <img src={logo} className="w-32" />
          </div>
          <ul className="flex gap-4 items-center">
            <li className="text-vengray hover:text-venblue transition-all duration-500  font-bold text-2xl cursor-pointer relative">
              <AiOutlineQuestionCircle />
            </li>
            <li className="text-vengray hover:text-venblue transition-all duration-500  font-bold text-2xl cursor-pointer relative">
              <MdOutlineNotifications />
              <div className="bg-red-600 text-xs p-1 absolute -top-0 right-0 h-3 w-3 text-white rounded-full flex items-center justify-center  ">
                2
              </div>
            </li>
            <li className="text-vengray hover:text-venblue transition-all duration-500 font-bold text-2xl cursor-pointer relative">
              <BiEnvelope />
            </li>
            <div className="profile h-8 w-8 flex items-center justify-center bg-venblue rounded-full text-white">
              JP
            </div>
          </ul>
        </nav>
      </header>
      <div className="dashboard_content">
        {/* Sidebar */}
        <aside className="max-h-[80vh] py-6 flex flex-col gap-6 rounded-r-lg ">
          <ul className="w-full">
            <li
              className={`DashLink ${activeMenu == 1 ? "DashLinkActive" : ""}`}
              onClick={() => setActiveMenu(1)}
            >
              <span className="ml-14 flex items-center gap-2">
                {" "}
                <RiDashboardLine />
                Dashboard
              </span>
            </li>
            <li className={`DashLink ${activeMenu == 2 ? "DashLinkActive" : ""}`}  onClick={() => setActiveMenu(2)}>
              <span className="ml-14 flex items-center gap-2">
                {" "}
                <FiGlobe />
                Domain
              </span>
            </li>
            <li className={`DashLink ${activeMenu == 3 ? "DashLinkActive" : ""}`}  onClick={() => setActiveMenu(3)}>
              <span className="ml-14 flex items-center gap-2">
                <AiOutlineUser />
                Users
              </span>
            </li>
            <li className={`DashLink ${activeMenu == 4 ? "DashLinkActive" : ""}`}  onClick={() => setActiveMenu(4)}>
              <span className="ml-14 flex items-center gap-2">
                {" "}
                <MdBusiness />
                Organization
              </span>
            </li>
            <li className={`DashLink ${activeMenu == 5 ? "DashLinkActive" : ""}`}  onClick={() => setActiveMenu(5)}>
              <span className="ml-14 flex items-center gap-2">
                {" "}
                <RiMailSettingsLine />
                Mail settings
              </span>
            </li>
            <li className={`DashLink ${activeMenu == 6 ? "DashLinkActive" : ""}`}  onClick={() => setActiveMenu(6)}>
              <span className="ml-14 flex items-center gap-2">
                <BiUserCircle />
                Account
              </span>
            </li>
            <li className={`DashLink ${activeMenu == 7 ? "DashLinkActive" : ""}`}  onClick={() => setActiveMenu(7)}>
              <span className="ml-14 flex items-center gap-2">
                <AiOutlineSafety /> Security & Compliance
              </span>
            </li>
            <li className={`DashLink ${activeMenu == 8 ? "DashLinkActive" : ""}`}  onClick={() => setActiveMenu(8)}>
              <span className="ml-14 flex items-center gap-2">
                <RiMoneyDollarBoxLine /> Subscription
              </span>
            </li>
          </ul>
          <ul className="w-full">
            <li className=" DashLink ">
              {" "}
              <span className="ml-14 flex items-center gap-2">
                {" "}
                <BiLogOutCircle />
                LogOut
              </span>
            </li>
          </ul>
        </aside>
        {/* Page Content */}
        <main>
          <div className="main_container w-[90%] min-h-[80vh]">
            
            {activeMenu==1 && <DashboardPage />}
            {activeMenu==2 && <DomainsPage/>}
            {activeMenu==3 && <UsersPage />}
            {activeMenu==4 && <OrganizationPage />}
            {activeMenu==5 && <MailSettingsPage />}
            {activeMenu==6 && <AccountPage />}
            {activeMenu==7 && <SecurityPage />}
            {activeMenu==8 && <SubscriptionPage />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
