import React,{useState} from 'react'

import MyProfile from './../../components/accountComps/myProfile/MyProfile'
import AccountSecurity from '../../components/accountComps/accountSecurity/AccountSecurity';
import AccountSettings from '../../components/accountComps/accountSettings/AccountSettings';
import AccountSessions from '../../components/accountComps/accountSessions/AccountSessions';
import AccountNewsletter from '../../components/accountComps/accountNewsletters/AccountNewsletter';

const AccountPage = () => {
  const [tabpage, setTabpage] = useState("myprofile");
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="text-2xl font-semibold text-vengray">
        Account
      </div>
       <div className="  w-full flex gap-10  justify-between rounded-lg bg-[white] min-h-screen">
        <div className="pt-8 flex flex-col gap-10 security_tab  border-r-[1px] border-gray-200 w-[30%]">
          <button
            onClick={() => setTabpage("myprofile")}
          className={` w-full pl-8 text-left ${tabpage =="myprofile"? 'border-venblue border-l-4 text-venblue':'text-vengray'} transition-all text-lg hover:text-venblue duration-300`}
            type="button"
          >
            My Profile
          </button>
          <button
            onClick={() => setTabpage("security")}
            className={` w-full pl-8 text-left ${tabpage =="security"? 'border-venblue border-l-4 text-venblue':'text-vengray'} text-lg hover:text-venblue transition-all duration-300`}
            type="button"
          >
            Security
          </button>
          <button
            onClick={() => setTabpage("settings")}
            className={` w-full ${tabpage =="settings"? 'border-venblue border-l-4 text-venblue':'text-vengray'}   pl-8 text-left text-lg hover:text-venblue transition-all duration-300`}
            type="button"
          >
            Settings
          </button>
          <button
            onClick={() => setTabpage("sessions")}
            className={` w-full ${tabpage =="sessions"? 'border-venblue border-l-4 text-venblue':'text-vengray'}  pl-8 text-left text-lg hover:text-venblue transition-all duration-300`}
            type="button"
          >
            Sessions
          </button>
            <button
            onClick={() => setTabpage("newsletters")}
            className={` w-full ${tabpage =="newsletters"? 'border-venblue border-l-4 text-venblue':'text-vengray'}  pl-8 text-left text-lg hover:text-venblue transition-all duration-300`}
            type="button"
          >
            Newsletters
          </button>
        </div>
        <div className="security_main_side pt-8 w-[65%] pr-8">
          {tabpage=='myprofile'&& <MyProfile/>}
          {tabpage == 'security' && <AccountSecurity/> }
          {tabpage == 'settings' && <AccountSettings/>}
          {tabpage == 'sessions' && <AccountSessions/>}
          {tabpage== 'newsletters' && <AccountNewsletter/>}
     
       
        </div>
      </div>
    </div>
  )
}

export default AccountPage