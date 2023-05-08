import React, { useState } from 'react'

import IpAddressTable from './IpAddressTable'

const AllowedIpAddress = () => {
    const [ipTabPage, setIpTabPage]= useState(2)
    const handleIpTab = (n)=>{
        setIpTabPage(n)
    }
  return (
    <div>
        <div className="allowedIpHeader mb-10">
            <h5 className='text-lg font-bold text-vengray mb-6 '>Allowed IP Addresses</h5>
            <p className='text-vengray text-base'>IP Restrictions allow administrators to control and restrict the access to Venmail from certain IP range based on the role of the user.</p>
        </div>
        <div className="allowedIpTabContainer">
            <div className="allowedIpTabBtns  w-full border-b mb-8">
            <button onClick={()=>handleIpTab(1)}  className={`py-3 mr-10 ${ipTabPage==1? 'border-venblue border-b-4':''} text-vengray text-base hover:text-venblue duration-300 transition-all font-semibold `}>
          All
        </button>
            <button  onClick={()=>handleIpTab(2)} className={`py-3 mr-10 ${ipTabPage==2? 'border-venblue border-b-4':''} text-vengray text-base hover:text-venblue duration-300 transition-all font-semibold `}>
          Super Administrator
        </button>
            <button  onClick={()=>handleIpTab(3)} className={`py-3 mr-10 ${ipTabPage==3? 'border-venblue border-b-4':''} text-vengray text-base hover:text-venblue duration-300 transition-all font-semibold `}>
          Admin
        </button>
            <button  onClick={()=>handleIpTab(4)} className={`py-3 mr-10 ${ipTabPage==4? 'border-venblue border-b-4':''} text-vengray text-base hover:text-venblue duration-300 transition-all font-semibold `}>
          User
        </button>
            </div>
            <div className="allowedIpTabContent">
           {ipTabPage==1 &&  <IpAddressTable cat='all'/>}
           {ipTabPage==2 &&  <IpAddressTable cat='super'/>}
           {ipTabPage==3 &&  <IpAddressTable cat='admin'/>}
           {ipTabPage==4 &&  <IpAddressTable cat='user'/>}
            </div>
        </div>
    </div>
  )
}

export default AllowedIpAddress